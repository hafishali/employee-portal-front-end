import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // first argumennt should be the item which have to be transformed
  // second argumnen based on which transformation has to be done

  transform(allemployee: any[], searchKey: string): any {

    const result:any=[]
    if(!allemployee || searchKey===""){
      return allemployee

    }
    allemployee.forEach((item:any)=>{
      if(item.name.trim().toLowerCase().includes (searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
