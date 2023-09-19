function sauvegarder() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let type = document.formulaire.type.value
  
    if (name === "") {
      alert("Veuillez entrer ton nom.");
      return;
    }
  
    if (email === "") {
      alert("Veuillez entrer une adresse e-mail.");
      return;
    }
  
    if (age === "") {
      alert("Veuillez entrer ton âge.");
      return;
    }

    if (type === "") {
        alert("Veuillez choisir un type.");
        return;
      }
  
      let result = "Nom: " + name + "\n";
      result += "Email: " + email + "\n";
      result += "Age: " + age + "\n";
      result += "Type: " + type;
  
    alert(result);
  }
  
  sauvegarder();