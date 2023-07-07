var chancePerfectBASup = (Number(document.getElementById("chancePerfectA").value)/100 + Number(document.getElementById("chancePerfect").value)/100 + 1)*5
var chancePerfectBA = 1 + (chancePerfectBASup/100)

var chancePerfectBOSup = (Number(document.getElementById("chancePerfectO").value)/100 + Number(document.getElementById("chancePerfect").value)/100 + 1)*5
var chancePerfectBO = 1 + (chancePerfectBOSup/100)

var craftingCostBA = 1 - (Number(document.getElementById('craftingCost').value) + Number(document.getElementById('craftingCostA').value))/100
var craftingCostBO = 1 - (Number(document.getElementById('craftingCost').value) + Number(document.getElementById('craftingCostO').value))/100

var reducedProductionBA = 1 - Number((document.getElementById("reducedProductionB").value) + Number(document.getElementById("reducedProductionA").value))/100
var reducedProductionBO = 1 - (Number(document.getElementById("reducedProductionB").value) + Number(document.getElementById("reducedProductionO").value))/100

function calculationFormula1() {

    var sumCostCraft = Math.ceil(document.getElementById('shyWildFlower').value*(18/100) + document.getElementById('wildFlower').value*(9/10) + 15*craftingCostBA)
    var costWithCommision1Item = Math.floor(document.getElementById('majorHPPotion').value * 0.95)
    var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
    var craftsPerHour = (60/(30*reducedProductionBA))*3
    var profit = sumCostCraft*craftsPerHour


    doValid('shyWildFlower')
    doValid('wildFlower')
    doValid('brightWildFlower')
    
    document.getElementById("profitMHPPotion-1").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
    document.getElementById("costMHPPotion-1").innerText = limitDecimalPlaces(sumCostCraft, 3);
    document.getElementById("30Craft-1").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
    document.getElementById("40Craft-1").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
    document.getElementById("profitPerHour-1").innerText = limitDecimalPlaces(profit,3)

    calculationFormula2()
    calculationFormula18()
}

function calculationFormula2() {

  var sumCostCraft = Math.ceil(document.getElementById('shyWildFlower').value*(48/100) + document.getElementById('wildFlower').value*(24/10) + document.getElementById('brightWildFlower').value*(6/10) + 30*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('elementalHPPotion').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  
  document.getElementById("profitMHPPotion-2").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-2").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-2").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-2").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-2").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula3()
}

function calculationFormula3() {

  var sumCostCraft = Math.ceil(document.getElementById('wildFlower').value*(8/10) + 30*craftingCostBA + (document.getElementById('shyWildFlower').value*(48/100) + document.getElementById('wildFlower').value*(24/10) + document.getElementById('brightWildFlower').value*(6/10) + 30*craftingCostBA)) 
  var costWithCommision1Item = Math.floor(document.getElementById('splendidElementalHPPotion').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBA
  var craftsPerHour = (60/(135*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('elementalHPPotion')

  
  document.getElementById("profitMHPPotion-3").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-3").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-3").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-3").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-3").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula4() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnPearls');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (36/10)*1.25*document.getElementById('redFish').value;
  } else {
    var secondPoint = (36/10)*document.getElementById('naturalPearl').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (9/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (9/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('smallFish').value*(72/100) + secondPoint + thirdPoint + 203*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('smallArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  // console.log(sumCostCraft)

  doValid('smallArctusCrystal')
  doValid('smallFish')
  doValid('redFish')
  doValid('naturalPearl')
  doValid('solarCarp')

  
  document.getElementById("profitMHPPotion-4").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-4").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-4").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-4").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-4").innerText = limitDecimalPlaces(profit,3)
 
  
  calculationFormula5()
  calculationFormula37()
}

function calculationFormula5() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnPearls');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (40/10)*1.25*document.getElementById('redFish').value;
  } else {
    var secondPoint = (40/10)*document.getElementById('naturalPearl').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (10/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (10/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('smallFish').value*(80/100) + secondPoint + thirdPoint + 205*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('arctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(45*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour


  
  document.getElementById("profitMHPPotion-5").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-5").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-5").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-5").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-5").innerText = limitDecimalPlaces(profit,3)
 
  
  calculationFormula6()
}

function calculationFormula6() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnPearls');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (64/10)*1.25*document.getElementById('redFish').value;
  } else {
    var secondPoint = (64/10)*document.getElementById('naturalPearl').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (16/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (16/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('smallFish').value*(128/100) + secondPoint + thirdPoint + 250*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('largeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*20*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  
  document.getElementById("profitMHPPotion-6").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-6").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-6").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-6").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-6").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula7()
}

function calculationFormula7() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnPearls');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (69/10)*1.25*document.getElementById('redFish').value;
  } else {
    var secondPoint = (69/10)*document.getElementById('naturalPearl').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (52/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (52/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('smallFish').value*(142/100) + secondPoint + thirdPoint + 300*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('hugeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*15*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour



  
  document.getElementById("profitMHPPotion-7").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-7").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-7").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-7").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-7").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula8() {

  var sumCostCraft = Math.ceil(document.getElementById('ancientRelic').value*(56/100) + document.getElementById('rareRelic').value*(28/10) + document.getElementById('orehaRelic').value*(7/10) + 203*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('smallArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour



  // console.log(craftingCostBO)
  // console.log(chancePerfectBO)


  doValid('ancientRelic')
  doValid('rareRelic')
  doValid('orehaRelic')
  
  document.getElementById("profitMHPPotion-8").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-8").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-8").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-8").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-8").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula9()
}

function calculationFormula9() {

  var sumCostCraft = Math.ceil(document.getElementById('ancientRelic').value*(64/100) + document.getElementById('rareRelic').value*(26/10) + document.getElementById('orehaRelic').value*(8/10) + 205*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('arctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(45*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour


  
  document.getElementById("profitMHPPotion-9").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-9").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-9").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-9").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-9").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula10()
}

function calculationFormula10() {

  var sumCostCraft = Math.floor(document.getElementById('ancientRelic').value*(94/100) + document.getElementById('rareRelic').value*(29/10) + document.getElementById('orehaRelic').value*(16/10) + 250*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('largeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*20*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  console.log(document.getElementById('ancientRelic').value*(94/100) + document.getElementById('rareRelic').value*(29/10) + document.getElementById('orehaRelic').value*(16/10) + 250*craftingCostBO)
  console.log(document.getElementById('ancientRelic').value*(94/100) + " " + document.getElementById('rareRelic').value*(29/10) + " " + document.getElementById('orehaRelic').value*(16/10) + " " + 250*craftingCostBO)
  console.log('sumCostCraft 1 ' + sumCostCraft)
  console.log('costWithCommision1Item 1 ' + costWithCommision1Item)
  console.log('costWithCommision1Craft 1 ' + costWithCommision1Craft)
  console.log('craftsPerHour 1 ' + craftsPerHour)
  console.log('profit 1 ' + profit)

  document.getElementById("profitMHPPotion-10").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-10").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-10").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-10").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-10").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula11()
}

function calculationFormula11() {

  var sumCostCraft = Math.ceil(document.getElementById('ancientRelic').value*(107/100) + document.getElementById('rareRelic').value*(51/10) + document.getElementById('orehaRelic').value*(52/10) + 300*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('hugeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*15*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour
  
  document.getElementById("profitMHPPotion-11").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-11").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-11").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-11").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-11").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula12() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnLeather');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (36/10)*1.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (36/10)*document.getElementById('toughLeather').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (9/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var thirdPoint = (9/10)*document.getElementById('orehaThickMeat').value;
  }


  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(72/100) + secondPoint + thirdPoint + 203*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('smallArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('rawMeat')
  doValid('treatedMeat')
  doValid('toughLeather')
  doValid('orehaThickMeat')
  
  document.getElementById("profitMHPPotion-12").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-12").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-12").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-12").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-12").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula13()
  calculationFormula37()
}

function calculationFormula13() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnLeather');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (40/10)*1.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (40/10)*document.getElementById('toughLeather').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (10/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var thirdPoint = (10/10)*document.getElementById('orehaThickMeat').value;
  }


  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(80/100) + secondPoint + thirdPoint + 205*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('arctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*30*chancePerfectBO
  var craftsPerHour = (60/(45*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  
  document.getElementById("profitMHPPotion-13").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-13").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-13").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-13").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-13").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula14()
}

function calculationFormula14() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnLeather');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue || checkedValue2) {
    var secondPoint = (64/10)*1.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (64/10)*document.getElementById('toughLeather').value;
  }

  if (checkedValue || checkedValue2) {
    var thirdPoint = (16/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var thirdPoint = (16/10)*document.getElementById('orehaThickMeat').value;
  }


  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(128/100) + secondPoint + thirdPoint + 250*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('largeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*20*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour


  document.getElementById("profitMHPPotion-14").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-14").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-14").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-14").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-14").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula15()
}

function calculationFormula15() {


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnLeather');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue) {
    var secondPoint = (69/10)*1.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (69/10)*document.getElementById('toughLeather').value;
  }

  if (checkedValue2) {
    var thirdPoint = (52/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var thirdPoint = (52/10)*document.getElementById('orehaThickMeat').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(142/100) + secondPoint + thirdPoint + 300*craftingCostBO) 
  var costWithCommision1Item = Math.floor(document.getElementById('hugeArctusCrystal').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*15*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBO))*3
  var profit = sumCostCraft*craftsPerHour

  // console.log('sumCostCraft 1 ' + sumCostCraft)
  // console.log('costWithCommision1Item 1 ' + costWithCommision1Item)
  // console.log('costWithCommision1Craft 1 ' + costWithCommision1Craft)
  // console.log('craftsPerHour 1 ' + craftsPerHour)
  // console.log('profit 1 ' + profit)

  document.getElementById("profitMHPPotion-15").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-15").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-15").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-15").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-15").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula22()
}

//3 block

function calculationFormula16() {

  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(16/10) + document.getElementById('exquisiteMushroom').value*(4/10) + document.getElementById('rareRelic').value*(5/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('panacea').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('crudeMushroom')
  doValid('freshMushroom')
  doValid('exquisiteMushroom')
  doValid('rareRelic')
  doValid('panacea')
  
  document.getElementById("profitMHPPotion-16").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-16").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-16").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-16").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-16").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula17()
  calculationFormula19()
  calculationFormula23()
  calculationFormula24()
}

function calculationFormula17() {

  var sumCostCraft = Math.ceil(document.getElementById('exquisiteMushroom').value*(10/10) + 15*craftingCostBA + (document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(16/10) + document.getElementById('exquisiteMushroom').value*(4/10) + document.getElementById('rareRelic').value*(5/10) + 15*craftingCostBA))
  var costWithCommision1Item = Math.floor(document.getElementById('splendidPanacea').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBA
  var craftsPerHour = (60/(75*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('splendidPanacea')
  
  document.getElementById("profitMHPPotion-17").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-17").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-17").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-17").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-17").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula18()
}

function calculationFormula18() {

  var sumCostCraft = Math.ceil(document.getElementById('shyWildFlower').value*(40/100) + document.getElementById('wildFlower').value*(20/10) + document.getElementById('brightWildFlower').value*(5/10) + document.getElementById('rareRelic').value*(2/10) + document.getElementById('sturdyTimber').value*(2/10) + 30*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('timeStopPotion').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('shyWildFlower')
  doValid('wildFlower')
  doValid('brightWildFlower')
  doValid('rareRelic')
  doValid('sturdyTimber')
  doValid('timeStopPotion')
  
  document.getElementById("profitMHPPotion-18").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-18").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-18").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-18").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-18").innerText = limitDecimalPlaces(profit,3)

  sortTable()
}

function calculationFormula19() {

  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(40/100) + document.getElementById('freshMushroom').value*(20/10) + document.getElementById('exquisiteMushroom').value*(5/10) + document.getElementById('rareRelic').value*(4/10) + document.getElementById('sturdyTimber').value*(2/10) + 30*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('stimulant').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('crudeMushroom')
  doValid('freshMushroom')
  doValid('exquisiteMushroom')
  doValid('rareRelic')
  doValid('sturdyTimber')
  doValid('stimulant')
  
  document.getElementById("profitMHPPotion-19").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-19").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-19").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-19").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-19").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula21()
}

function calculationFormula20() {

  var sumCostCraft = Math.ceil(document.getElementById('shyWildFlower').value*(40/100) + document.getElementById('wildFlower').value*(20/10) + document.getElementById('brightWildFlower').value*(5/10) + document.getElementById('rareRelic').value*(2/10) + document.getElementById('strongIronOre').value*(2/10) + 30*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('atropinePotion').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('shyWildFlower')
  doValid('wildFlower')
  doValid('brightWildFlower')
  doValid('rareRelic')
  doValid('strongIronOre')
  doValid('atropinePotion')
  
  document.getElementById("profitMHPPotion-20").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-20").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-20").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-20").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-20").innerText = limitDecimalPlaces(profit,3)

  calculationFormula24()
  calculationFormula22()
}

function calculationFormula21() {

  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(35/100) + document.getElementById('freshMushroom').value*(22/10) + document.getElementById('exquisiteMushroom').value*(5/10) + 16*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('prayer').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('crudeMushroom')
  doValid('freshMushroom')
  doValid('exquisiteMushroom')
  doValid('prayer')
  
  document.getElementById("profitMHPPotion-21").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-21").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-21").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-21").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-21").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula22() {

  var sumCostCraft = Math.ceil(document.getElementById('toughLeather').value*(17/100) + document.getElementById('wildFlower').value*(17/10) + document.getElementById('shyWildFlower').value*(27/100) + 16*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('capeQuick').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBA
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('toughLeather')
  doValid('wildFlower')
  doValid('shyWildFlower')
  doValid('capeQuick')
  
  document.getElementById("profitMHPPotion-22").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-22").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-22").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-22").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-22").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula23()
}

function calculationFormula23() {
  
  var sumCostCraft = Math.ceil(document.getElementById('toughLeather').value*(22/100) + document.getElementById('shyWildFlower').value*(35/100) + document.getElementById('wildFlower').value*(22/10) + 16*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('Al jadan Cape').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('toughLeather')
  doValid('shyWildFlower')
  doValid('wildFlower')
  doValid('Al jadan Cape')
  
  document.getElementById("profitMHPPotion-23").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-23").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-23").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-23").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-23").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula24()
}

function calculationFormula24() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('toughLeather').value*(2/100) + document.getElementById('crudeMushroom').value*(35/100) + document.getElementById('freshMushroom').value*(15/10) + document.getElementById('exquisiteMushroom').value*(5/10) + document.getElementById('strongIronOre').value*(2/10) + 16*craftingCostBO)
  var costWithCommision1Item = Math.floor(document.getElementById('ghostlyCapeSpeed').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('toughLeather')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('strongIronOre')
  doValid('ghostlyCapeSpeed')
  
  document.getElementById("profitMHPPotion-24").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-24").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-24").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-24").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-24").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula25()
}

function calculationFormula25() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('pheromoneBomb').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('heavyIronOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('pheromoneBomb')
  
  document.getElementById("profitMHPPotion-25").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-25").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-25").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-25").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-25").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula26()
}

var sumCostCraftDestructionB

function calculationFormula26() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 16*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('destructionBomb').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('heavyIronOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('destructionBomb')
  
  document.getElementById("profitMHPPotion-26").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-26").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-26").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-26").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-26").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula27()
}

function calculationFormula27() { 
  
  var exquisiteMushroom = document.getElementById('exquisiteMushroom').value


  var sumCostCraft = Math.ceil(exquisiteMushroom*(2/10) + (document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + exquisiteMushroom*(4/10) + 16*craftingCostBA) + 16*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('hardDestructionBomb').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBO
  var craftsPerHour = (60/(45*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour


  doValid('heavyIronOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('hardDestructionBomb')
  
  document.getElementById("profitMHPPotion-27").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-27").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-27").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-27").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-27").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula28()
}

function calculationFormula28() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('ironOre').value*(10/100) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('whirlwindGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('ironOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('whirlwindGrenade')
  
  document.getElementById("profitMHPPotion-28").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-28").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-28").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-28").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-28").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula29()
  calculationFormula35()
}

function calculationFormula29() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('ironOre').value*(3/100) + document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('flashbangGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('ironOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('flashbangGrenade')
  
  document.getElementById("profitMHPPotion-29").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-29").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-29").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-29").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-29").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula30() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 16*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('corrosionGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('heavyIronOre')
  doValid('freshMushroom')
  doValid('crudeMushroom')
  doValid('exquisiteMushroom')
  doValid('corrosionGrenade')
  
  document.getElementById("profitMHPPotion-30").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-30").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-30").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-30").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-30").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula31()
}

function calculationFormula31() { 
  
  var sumCostCraft = Math.ceil((document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 16*craftingCostBA) + document.getElementById('exquisiteMushroom').value*(2/10) + 16*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('capacitiveCorrosionGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBO
  var craftsPerHour = (60/(45*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  // console.log((document.getElementById('heavyIronOre').value*(6/10) + document.getElementById('crudeMushroom').value*(32/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(4/10) + 16*craftingCostBA))
  // console.log(document.getElementById('exquisiteMushroom').value*(2/10) + 16*craftingCostBA)

  // console.log(sumCostCraft)
  // console.log(costWithCommision1Item)
  // console.log(costWithCommision1Craft)
  // console.log(craftsPerHour)
  // console.log(profit)

  doValid('capacitiveCorrosionGrenade')
  
  document.getElementById("profitMHPPotion-31").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-31").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-31").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-31").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-31").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula32()
}

function calculationFormula32() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + document.getElementById('tenderTimber').value*(3/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('highExplosiveGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('tenderTimber')
  doValid('highExplosiveGrenade')
  
  document.getElementById("profitMHPPotion-32").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-32").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-32").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-32").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-32").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula33()
}

function calculationFormula33() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + document.getElementById('tenderTimber').value*(3/10) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('fragmentationGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*3*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('fragmentationGrenade')
  
  document.getElementById("profitMHPPotion-33").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-33").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-33").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-33").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-33").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula34()
}

function calculationFormula34() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('exquisiteMushroom').value*(4/10) + (document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + document.getElementById('tenderTimber').value*(3/10) + 15*craftingCostBA) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('improvedFragmentationGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('improvedFragmentationGrenade')
  
  document.getElementById("profitMHPPotion-34").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-34").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-34").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-34").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-34").innerText = limitDecimalPlaces(profit,3)
  
  calculationFormula35()
}

function calculationFormula35() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + document.getElementById('ironOre').value*(5/100) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('theSamumBomb').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('theSamumBomb')
  
  document.getElementById("profitMHPPotion-35").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-35").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-35").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-35").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-35").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula36() { 
  
  var sumCostCraft = Math.ceil(document.getElementById('crudeMushroom').value*(24/100) + document.getElementById('freshMushroom').value*(12/10) + document.getElementById('exquisiteMushroom').value*(3/10) + document.getElementById('ironOre').value*(5/100) + 15*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('frostGrenade').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*2*chancePerfectBO
  var craftsPerHour = (60/(30*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('frostGrenade')
  
  document.getElementById("profitMHPPotion-36").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-36").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-36").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-36").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-36").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function calculationFormula37() { 
  
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue2) {
    var secondPoint = (12/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (12/10)*document.getElementById('orehaThickMeat').value;
  }

  if (checkedValue) {
    var thirdPoint = (10/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (10/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(96/100) + document.getElementById('treatedMeat').value*(48/10) + document.getElementById('smallFish').value*(80/100) + document.getElementById('redFish').value*(40/10) + secondPoint + thirdPoint + 50*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('creamySelectedRabbit').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*1*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('creamySelectedRabbit')
  
  document.getElementById("profitMHPPotion-37").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-37").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-37").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-37").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-37").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
  calculationFormula38()
}

function calculationFormula38() { 
  
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('changeRedFishOnOrehaGold');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  var checkedValue2 = null; 
  var inputElements = document.getElementsByClassName('changeTreatedMeatOnOrehaThickMeat');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue2 = inputElements[i].value;
           break;
      }
  }

  if (checkedValue2) {
    var secondPoint = (52/10)*6.25*document.getElementById('treatedMeat').value;
  } else {
    var secondPoint = (52/10)*document.getElementById('orehaThickMeat').value;
  }

  if (checkedValue) {
    var thirdPoint = (50/10)*6.25*document.getElementById('redFish').value;
  } else {
    var thirdPoint = (50/10)*document.getElementById('solarCarp').value;
  }

  var sumCostCraft = Math.ceil(document.getElementById('rawMeat').value*(106/100) + document.getElementById('treatedMeat').value*(63/10) + document.getElementById('smallFish').value*(98/100) + document.getElementById('redFish').value*(52/10) + secondPoint + thirdPoint + 67*craftingCostBA)
  var costWithCommision1Item = Math.floor(document.getElementById('stuffedWithApples').value * 0.95)
  var costWithCommision1Craft = costWithCommision1Item*1*chancePerfectBO
  var craftsPerHour = (60/(60*reducedProductionBA))*3
  var profit = sumCostCraft*craftsPerHour

  doValid('stuffedWithApples')
  
  document.getElementById("profitMHPPotion-38").innerText = limitDecimalPlaces((costWithCommision1Craft - sumCostCraft), 3);
  document.getElementById("costMHPPotion-38").innerText = limitDecimalPlaces(sumCostCraft, 3);
  document.getElementById("30Craft-38").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*30), 3);
  document.getElementById("40Craft-38").innerText = limitDecimalPlaces(((costWithCommision1Craft - sumCostCraft)*40), 3);
  document.getElementById("profitPerHour-38").innerText = limitDecimalPlaces(profit,3)
  
  sortTable()
}

function doValid(inputId) {
  var inputElement = document.getElementById(inputId);
  var inputValue = inputElement.value;
  var parsedInput = parseInt(inputValue, 10);

  if (!isNaN(parsedInput) && parsedInput > 0) {
    inputElement.value = parsedInput;
  } else {
    inputElement.value = 0; // Сбросить значение поля ввода
  }

}

function reCalcSet() {

  chancePerfectBASup = (Number(document.getElementById("chancePerfectA").value)/100 + Number(document.getElementById("chancePerfect").value)/100 + 1)*5
  chancePerfectBA = 1 + (chancePerfectBASup/100)

  chancePerfectBOSup = (Number(document.getElementById("chancePerfectO").value)/100 + Number(document.getElementById("chancePerfect").value)/100 + 1)*5
  chancePerfectBO = 1 + (chancePerfectBOSup/100)

  craftingCostBA = 1 - (Number(document.getElementById('craftingCost').value) + Number(document.getElementById('craftingCostA').value))/100
  craftingCostBO = 1 - (Number(document.getElementById('craftingCost').value) + Number(document.getElementById('craftingCostO').value))/100

  reducedProductionBA = 1 - Number((document.getElementById("reducedProductionB").value) + Number(document.getElementById("reducedProductionA").value))/100
  reducedProductionBO = 1 - (Number(document.getElementById("reducedProductionB").value) + Number(document.getElementById("reducedProductionO").value))/100

  doValid("craftingCost");
  doValid("chancePerfect");
  doValid("craftingCostA");
  doValid("chancePerfectA");
  doValid("reducedProductionB");
  doValid("craftingCostO");
  doValid("chancePerfectO");
  doValid("reducedProductionO");
  doValid("reducedProductionA");

  
  calculationFormula1()
  calculationFormula4()
  calculationFormula8()
  calculationFormula12()
  calculationFormula16()
  calculationFormula20()
  calculationFormula21()
  calculationFormula30()
  calculationFormula36()

  
}

function limitDecimalPlaces(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
}

function sortTable() {
  var table = document.querySelector('.main-table table');
  var rows = Array.from(table.querySelectorAll('tr:not(:first-child)'));

  rows.sort(function(a, b) {
    var aValue = parseInt(a.querySelector('td:nth-child(2) div.text-data').innerText || 0);
    var bValue = parseInt(b.querySelector('td:nth-child(2) div.text-data').innerText || 0);

    // Обработка значения "0" как минимального значения
    if (aValue === 0 && bValue === 0) {
      return 0;
    } else if (aValue === 0) {
      return 1;
    } else if (bValue === 0) {
      return -1;
    } else {
      return bValue - aValue;
    }
  });

  // Удалить все строки из таблицы, кроме заголовка
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Вставить отсортированные строки обратно в таблицу
  rows.forEach(function(row) {
    table.appendChild(row);
  });
}

function toggleCheckboxes(sourceCheckbox) {
  var checkboxes = document.getElementsByClassName("checkbox");

  if (sourceCheckbox.checked) {
    // Активировать нужные чекбоксы
    checkboxes[0].disabled = true;  // changeRedFishOnPearls
    checkboxes[1].disabled = true;  // changeRedFishOnOrehaGold
    checkboxes[2].disabled = true;  // changeTreatedMeatOnLeather
    checkboxes[3].disabled = true;  // changeTreatedMeatOnOrehaThickMeat

    checkboxes[0].checked = true;  // Установить галочку в первом чекбоксе
    checkboxes[1].checked = true;  // Установить галочку во втором чекбоксе
    checkboxes[2].checked = true;  // Убрать галочку в третьем чекбоксе
    checkboxes[3].checked = true;  // Убрать галочку в четвертом чекбоксе
  
  } else {
    // Деактивировать нужные чекбоксы
    checkboxes[0].disabled = false;  // changeRedFishOnPearls
    checkboxes[1].disabled = false;  // changeRedFishOnOrehaGold
    checkboxes[2].disabled = false;  // changeTreatedMeatOnLeather
    checkboxes[3].disabled = false;  // changeTreatedMeatOnOrehaThickMeat

    checkboxes[0].checked = false;  // Убрать галочку в первом чекбоксе
    checkboxes[1].checked = false;  // Убрать галочку во втором чекбоксе
    checkboxes[2].checked = false;  // Установить галочку в третьем чекбоксе
    checkboxes[3].checked = false;  // Установить галочку в четвертом чекбоксе
  }
  reCalcSet()

}

function toggleColumn() {
  var table = document.getElementsByClassName("main-table")[0];
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    if (cells.length > 2) {  // Проверяем, что есть хотя бы 3 столбца в строке
      cells[2].classList.toggle("hidden-column");
    }
  }
}



reCalcSet()