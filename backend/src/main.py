import os
import cohere
import pandas as pd
import json
from unstructured.partition.pdf import partition_pdf

print('cohere version:', cohere.__version__)

COHERE_API_KEY = os.environ.get("CO_API_KEY")
COHERE_MODEL = 'command-r-plus'
co = cohere.Client(api_key=COHERE_API_KEY)

def convert_to_json(text: str) -> dict:
    """
    Given text files, convert to json object and saves to csv.

    Args:
        text (str): The text to extract information from.

    Returns:
        dict: A dictionary containing the result of the conversion process.
    """

    MANDATORY_FIELDS = [
        "total_amount",
        "invoice_number",
    ]

    message = """# Instruction
    Given the text, convert to json object with the following keys:
    total_amount, invoice_number

    # Output format json:
    {{
        "total_amount": "<extracted amount="" invoice="" total="">",
        "invoice_number": "<extracted invoice="" number="">",
    }}

    Do not output code blocks.

    # Extracted PDF
    {text}
    """

    result = co.chat(
        message=message.format(text=text), model=COHERE_MODEL, preamble=None
    ).text

    try:
        result = json.loads(result)
        # check if all keys are present
        if not all(i in result.keys() for i in MANDATORY_FIELDS):
            return {"result": f"ERROR: Keys are missing. Please check your result {result}"}

        df = pd.DataFrame(result, index=[0])
        df.to_csv("output.csv", index=False)
        return {"result": "SUCCESS. All steps have been completed."}

    except Exception as e:
        return {"result": f"ERROR: Could not load the result as json. Please check the result: {result} and ERROR: {e}"}

def extract_pdf(path):
    """
    Function to extract text from a PDF file.
    """
    elements = partition_pdf(path)
    return "\n".join([str(el) for el in elements])


def pdf_extractor(pdf_path):
    """
    Main function that extracts pdf and calls the cohere agent.
    """
    pdf_text = extract_pdf(pdf_path)

    prompt = f"""
    # Instruction
    You are expert at extracting invoices from PDF. The text of the PDF file is given below.

    You must follow the steps below:
    1. Summarize the text and extract only the most information: total amount billed and invoice number.
    2. Using the summary above, call convert_to_json tool, which uses the summary from step 1.
    If you run into issues. Identifiy the issue and retry.
    You are not done unless you see SUCCESS in the tool output.

    # File Name:
    {pdf_path}

    # Extracted Text:
    {pdf_text}
    """
    output = cohere_agent(prompt, None, verbose=True)
    print(f"Finished extracting: {pdf_path}")

    print('Please check the output below')
    print(pd.read_csv('output.csv'))


pdf_extractor('simple_invoice.pdf')

