import xlsx from 'xlsx'

const API = 'ADD API HERE'

async function fetchDataAndConvertToExcel() {
	// Fetch the JSON data
	const request = await fetch(API)
	const data = await request.json()

	/**
	 * Convert JSON data to worksheet
	 *
	 * Data has to be an array
	 * Check response from API and verify an array is returned.
	 */
	const worksheet = xlsx.utils.json_to_sheet(data)

	// Create a new workbook
	const workbook = xlsx.utils.book_new()

	// Append worksheet to workbook
	xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

	// Write the workbook to a file
	xlsx.writeFile(workbook, 'data.xlsx')

	console.log('Excel file created successfully.')
}

// Run the function
fetchDataAndConvertToExcel()
