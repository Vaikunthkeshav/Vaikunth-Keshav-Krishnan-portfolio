#!/usr/bin/env python3
"""
PDF to Markdown Converter
Converts all PDF files in the files directory to markdown format
"""

import os
import sys
from pathlib import Path

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using Python's built-in capabilities"""
    try:
        import PyPDF2
        text = ""
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num, page in enumerate(pdf_reader.pages):
                text += f"\n\n## Page {page_num + 1}\n\n"
                text += page.extract_text()
        return text
    except ImportError:
        print("PyPDF2 not available, trying alternative method...")
        return extract_text_alternative(pdf_path)

def extract_text_alternative(pdf_path):
    """Alternative text extraction method"""
    try:
        import subprocess
        result = subprocess.run(['pdftotext', str(pdf_path), '-'],
                              capture_output=True, text=True)
        return result.stdout
    except:
        print(f"Could not extract text from {pdf_path}")
        return f"# {Path(pdf_path).stem}\n\nText extraction failed for this PDF."

def convert_pdf_to_markdown(pdf_path, output_dir):
    """Convert a single PDF to markdown"""
    pdf_name = Path(pdf_path).stem
    output_path = output_dir / f"{pdf_name}.md"

    print(f"Converting {pdf_name}...")

    # Extract text from PDF
    text = extract_text_from_pdf(pdf_path)

    # Create markdown content
    markdown_content = f"# {pdf_name.replace('_', ' ').replace('-', ' ')}\n\n"
    markdown_content += "**Document Type:** PDF Report\n\n"
    markdown_content += "---\n\n"
    markdown_content += text

    # Write to markdown file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(markdown_content)

    print(f"✓ Converted to {output_path}")
    return output_path

def main():
    # Set up paths
    base_dir = Path("/home/arsive/personal/vaikuntj y")
    pdf_dir = base_dir / "files"
    output_dir = base_dir / "markdown"

    # Create output directory if it doesn't exist
    output_dir.mkdir(exist_ok=True)

    # Find all PDF files
    pdf_files = list(pdf_dir.glob("*.pdf"))

    if not pdf_files:
        print("No PDF files found in the files directory")
        return

    print(f"Found {len(pdf_files)} PDF files to convert:")
    for pdf in pdf_files:
        print(f"  - {pdf.name}")

    print("\nStarting conversion...\n")

    # Convert each PDF
    converted_files = []
    for pdf_path in pdf_files:
        try:
            output_path = convert_pdf_to_markdown(pdf_path, output_dir)
            converted_files.append(output_path)
        except Exception as e:
            print(f"✗ Failed to convert {pdf_path.name}: {e}")

    print(f"\n✓ Conversion complete! Converted {len(converted_files)} files.")
    print(f"Markdown files saved to: {output_dir}")

if __name__ == "__main__":
    main()