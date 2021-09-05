const express = require("express")
const { google, analyticsdata_v1alpha } = require("googleapis")
const processGrades = require("./utils/process-grades")

const app = express()

app.get("/", async (req, res) => {

    console.log("Autenticando...")

    // Auth object from Google API
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client })

    const spreadsheetId = "1otlNIB4LfYPWLuKNmXN4f45PKewDZLsqsSOnHZg_icA"

    console.log("Autenticação realizada com sucesso!")
    console.log("Lendo a planilha...")

    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "engenharia_de_software!A4:F"
    })

    console.log("Leitura completa com sucesso!")
    console.log("Processando informações...")

    // Evaluate all students from the spreadsheet
    let data = processGrades(60, getRows.data.values)

    console.log("Informações processadas com sucesso!...")
    console.log("Escrevendo na planilha...")

    // Write data into the spreadsheet
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: `engenharia_de_software!G4:H${data.length + 3}`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: data
        }
    })

    console.log("Planilha preenchida com sucesso!")
})

// App listens to 1337 port
app.listen(1337, (req, res) => {})