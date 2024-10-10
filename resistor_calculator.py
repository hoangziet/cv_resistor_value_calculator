# resistor_calculator.py
from typing import Tuple, List
import json
import os

# Load color codes and tolerance values from a JSON file
with open('./resistor_data.json', 'r') as file:
    data = json.load(file)
COLOR_CODES, TOLERANCE = data['COLOR_CODES'], data['TOLERANCE']

def calculate_resistor_value(band1: str, band2: str, band3: str, band4: str) -> Tuple[float, str]:
    """
    Calculate the resistor value based on the four color bands.
    
    Args:
    band1, band2, band3, band4 (str): Colors of the four bands on the resistor
    
    Returns:
    Tuple[float, str]: Resistor value in ohms and tolerance
    """
    try:
        value = (COLOR_CODES[band1] * 10 + COLOR_CODES[band2]) * (10 ** COLOR_CODES[band3])
        tolerance = TOLERANCE[band4]
        return value, tolerance
    except KeyError as e:
        raise ValueError(f"Invalid color band: {e}")

def format_resistor_value(value: float) -> str:
    """
    Format the resistor value for human-readable output.
    
    Args:
    value (float): Resistor value in ohms
    
    Returns:
    str: Formatted resistor value
    """
    if value >= 1e6:
        return f"{value/1e6:.2f} MΩ"
    elif value >= 1e3:
        return f"{value/1e3:.2f} kΩ"
    else:
        return f"{value:.2f} Ω"

def process_resistor_bands(bands: List[str]) -> str:
    """
    Process the resistor bands and return a formatted result.
    
    Args:
    bands (List[str]): List of four color band names
    
    Returns:
    str: Formatted result string
    """
    if len(bands) != 4:
        raise ValueError("Exactly four color bands are required")
    
    plus_minus = '±'
    value, tolerance = calculate_resistor_value(*bands)
    formatted_value = format_resistor_value(value)
    return f"Resistor value: {formatted_value} {plus_minus}{tolerance}"

if __name__ == "__main__":
    test_bands = ['BROWN', 'BLACK', 'RED', 'GOLD']
    result = process_resistor_bands(test_bands)
    print(result)
