function microondas(comida, tempo){
    if (comida == "pipoca") {
        if (tempo < 10) {
          console.log("Tempo insuficiente");
        } else if (tempo >= 10 && tempo < 20) {
          console.log("Prato pronto, bom apetite!!!");
        } else if (tempo >= 20 && tempo < 30) {
          console.log("Vish! Você infelizmente queimou a comida...");
        } else if (tempo >= 30) {
          console.log("KABOOM!");
        } else {
          console.log("Prato inexistente.");
        }
      } else if (comida == "macarrão") {
        if (tempo < 8) {
          console.log("Tempo insuficiente");
        } else if (tempo >= 8 && tempo < 16) {
          console.log("Prato pronto, bom apetite!!!");
        } else if (tempo >= 16 && tempo < 24) {
          console.log("Vish! Você infelizmente queimou a comida...");
        } else if (tempo >= 24) {
          console.log("KABOOM!");
        }
      } else if (comida == "carne") {
        if (tempo < 15) {
          console.log("Tempo insuficiente");
        } else if (tempo >= 15 && tempo < 30) {
          console.log("Prato pronto, bom apetite!!!");
        } else if (tempo >= 30 && tempo < 45) {
          console.log("Vish! Você infelizmente queimou a comida...");
        } else if (tempo >= 45) {
          console.log("KABOOM!");
        }
      } else if (comida == "feijão") {
        if (tempo < 12) {
          console.log("Tempo insuficiente");
        } else if (tempo >= 12 && tempo < 24) {
          console.log("Prato pronto, bom apetite!!!");
        } else if (tempo >= 24 && tempo < 36) {
          console.log("Vish! Você infelizmente queimou a comida...");
        } else if (tempo >= 36) {
          console.log("KABOOM!");
        }
      } else if (comida == "brigadeiro") {
        if (tempo < 8) {
          console.log(")Tempo insuficiente");
        } else if (tempo >= 8 && tempo < 16) {
          console.log("Prato pronto, bom apetite!!!");
        } else if (tempo >= 16 && tempo < 24) {
          console.log("Vish! Você infelizmente queimou a comida...");
        } else if (tempo >= 24) {
          console.log("KABOOM!");
        }
      } else {
        console.log("Prato inexistente.");
      }
    }

    microondas("amendoim", 12);
    microondas("carne", 20);
    microondas("brigadeiro", 20);
    microondas("feijão", 36);
    microondas("macarrão", 5);



    