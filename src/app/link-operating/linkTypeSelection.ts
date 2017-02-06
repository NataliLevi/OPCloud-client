import { dataBase } from './linksDatabase'

export const linkTypeSelection = {

//Function findSuitableLinks gets a potential link, get from it the source and target types, go over
// the database and find all link types the are suitable to this specific link. The function return all found links in an array
  findSuitableLinks(link){
    //substring because we want to remove the prefix 'opm.'
    //toLowerCase because we need the type to match the format in database.
    var source: string = link.getSourceElement().attributes.type.substring(4).toLowerCase();
    var target:string = link.getTargetElement().attributes.type.substring(4).toLowerCase();
    var result: Array<string> = [];
    var linksDataArray: dataBase = new dataBase();

    //Go over the database
    for (let linkData of linksDataArray.linksArray){
      //The link name is already in the final array so no need to check it, as every link name will appear only once
      if(result.indexOf(linkData.linkName)>-1){
        continue;
      }

      var isSourceMatch = ((linkData.sourceType.indexOf(source) > -1) && (linkData.sourceType.indexOf("state") == -1));
      var isTarget1Match = ((linkData.targetType1.indexOf(target) > -1) && (linkData.targetType1.indexOf("state") == -1));
      var isTarget2Match = ((linkData.targetType2.indexOf(target) > -1) && (linkData.targetType2.indexOf("state") == -1));

      if(isSourceMatch && (isTarget1Match || isTarget2Match)){
        result.push(linkData.linkName);
      }
    }
    return result;
  }
}
