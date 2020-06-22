<template>
    <button @click="download">Podklady pro mzdu</button>
</template>

<script>
export default {
    name: "ExportButton",
    methods: {
        download() {
            function exportToCsv(filename, rows) {
                var processRow = function (row) {
                    var finalVal = ""
                    for (var j = 0; j < row.length; j++) {
                        var innerValue =
                            row[j] === null ? "" : row[j].toString()
                        if (row[j] instanceof Date) {
                            innerValue = row[j].toLocaleString()
                        }
                        var result = innerValue.replace(/"/g, '""')
                        if (result.search(/("|,|\n)/g) >= 0)
                            result = '"' + result + '"'
                        if (j > 0) finalVal += ","
                        finalVal += result
                    }
                    return finalVal + "\n"
                }

                var csvFile = ""
                for (var i = 0; i < rows.length; i++) {
                    csvFile += processRow(rows[i])
                }

                var blob = new Blob([csvFile], {
                    type: "text/csv;charset=utf-8;",
                })
                if (navigator.msSaveBlob) {
                    // IE 10+
                    navigator.msSaveBlob(blob, filename)
                } else {
                    var link = document.createElement("a")
                    if (link.download !== undefined) {
                        // feature detection
                        // Browsers that support HTML5 download attribute
                        var url = URL.createObjectURL(blob)
                        link.setAttribute("href", url)
                        link.setAttribute("download", filename)
                        link.style.visibility = "hidden"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                    }
                }
            }
            exportToCsv("Podklady pro mzdu.csv", [
                ["01.6.2020", "8 hodin"],
                ["02.6.2020", "8 hodin"],
                ["03.6.2020", "8 hodin"],
                ["04.6.2020", "8 hodin"],
                ["05.6.2020", "8 hodin"],
                ["06.6.2020", "8 hodin"],
                ["07.6.2020", "8 hodin"],
                ["08.6.2020", "8 hodin"],
                ["09.6.2020", "8 hodin"],
                ["10.6.2020", "8 hodin"],
                ["11.6.2020", "8 hodin"],
                ["12.6.2020", "8 hodin"],
                ["13.6.2020", "8 hodin"],
                ["14.6.2020", "8 hodin"],
                ["15.6.2020", "8 hodin"],
                ["16.6.2020", "8 hodin"],
                ["17.6.2020", "8 hodin"],
                ["18.6.2020", "8 hodin"],
                ["19.6.2020", "8 hodin"],
                ["20.6.2020", "8 hodin"],
                ["21.6.2020", "8 hodin"],
                ["22.6.2020", "8 hodin"],
                ["23.6.2020", "8 hodin"],
                ["24.6.2020", "8 hodin"],
                ["25.6.2020", "8 hodin"],
                ["26.6.2020", "8 hodin"],
                ["27.6.2020", "8 hodin"],
                ["28.6.2020", "8 hodin"],
            ])
        },
    },
}
</script>

<style>
button {
    border: 1px solid rgb(165, 66, 0);
    background-color: rgb(206, 82, 0);
    padding: 14px;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    align-self: center;
}
</style>
