function buildMenu()
{
    var links = [
        ["STARTSIDA", "index.html"],
        ["OM OSS", "omoss.html"],
        ["UPPDRAG HOS KUNDER", "uppdraghoskunder.html"],
        ["KONTAKTA OSS", "kontaktaoss.html"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}