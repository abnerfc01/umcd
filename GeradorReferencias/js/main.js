function createReference() {
    var selectBook = document.querySelector("#book");
    var sBook = selectBook.value;
  
    var selectChapter = document.querySelector("#chapter");
    var sChapter = selectChapter.value;
  
    var selectVerse1 = document.querySelector("#verse1");
    var sVerse1 = selectVerse1.value;
  
    var selectVerse2 = document.querySelector("#verse2");
    var sVerse2 = selectVerse2.value;
  
    if (sVerse1 == "" || sChapter == ""){
      
      return "ERROR"
      
    }
    else{
      
    
    
    if (sVerse2 != "") {
      var reference = "https://www.bible.com/pt/bible/129/" + sBook +"." + sChapter + "." + sVerse1
        reference += "-" + sVerse2 + ".NVI";
      console.log(reference);
    } else {
      var reference =
        "https://www.bible.com/pt/bible/129/" +
        sBook +
        "." +
        sChapter +
        "." +
        sVerse1 +
        ".NVI";
      
      
    }
      }
    return reference;
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
  