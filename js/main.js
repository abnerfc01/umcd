// ... (código anterior)

// Função para obter as informações da versão selecionada
function getVersionInfo(version) {
  var versions = {
    "129": {
      "name": "Nova Vida",
      "abbr": "129",
      "final":"NVI",
      "url": "https://www.bible.com/pt/bible/129/"
    },
    "1966": {
      "name": "Versão 1966",
      "abbr": "1966",
      "final":"abr",
      "url": "https://www.bible.com/pt/bible/1966/"
    },
    "212": {
      "name": "Versão 1966",
      "abbr": "212",
      "final":"ARC",
      "url": "https://www.bible.com/pt/bible/212/"
    }
  };

  return versions[version];
}

function createReference() {
  var selectVersion = document.querySelector("#version");
  var sVersion = selectVersion.value;
  
  var versionInfo = getVersionInfo(sVersion);

  var selectBook = document.querySelector("#book");
  var sBook = selectBook.value;

  var selectChapter = document.querySelector("#chapter");
  var sChapter = selectChapter.value;

  var selectVerse1 = document.querySelector("#verse1");
  var sVerse1 = selectVerse1.value;

  var selectVerse2 = document.querySelector("#verse2");
  var sVerse2 = selectVerse2.value;

  if (sVerse1 == "" || sChapter == "") {
    return "ERROR";
  } else {
    var reference = versionInfo.url + sBook + "." + sChapter + "." + sVerse1;

    if (sVerse2 != "") {
      reference += "-" + sVerse2 + "." +  versionInfo.final;
    } else {
      reference += "." + versionInfo.final;
    }

    console.log(reference);
    return reference;
  }
}

  
  function exibeLink() {
    
    var reference = createReference();
    
    if (reference == "ERROR")
    {
      var link = document.getElementById("LinkYouVersion");
      var html = "Por favor, preencha o número do Capitulo e Versiculo."
      link.innerHTML = html;
    }
    else
    {
    var link = document.getElementById("LinkYouVersion");
    var html = "<a href='" + reference 
    
    html += "' target='_blank'>" + reference + "</a>";
    
    link.innerHTML = html;
    document.getElementById("btnCopyClipboard").disabled = false;
      };
  }
  
  function copyClipboard() {
    /* Get the text field */
    var referenceText = createReference();
  
    var hiddenField = document.getElementById("copyText");
    hiddenField.value = referenceText;
    hiddenField.select();
    document.execCommand("copy");
    
  
    var element = document.getElementById("CopyDone");
    var html = "Cópia efetuada com sucesso.";
    element.innerHTML = html;
  }
  