import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  arrayUser: Array<any>=[
      {
        id:1,
        name: 'Anh',
      },
      {
        id:2,
        name: 'Minh',
      },
      {
        id:3,
        name: 'Duyên',
      },
      {
        id:4,
        name: 'Ngọc',
      },
      {
        id:5,
        name: 'Thiên',
      },
      {
        id:6,
        name: 'Trung',
      },
      {
        id:7,
        name: 'Hạnh',
      },
  ];
  getUsers(): Array<any>{
    return this.arrayUser;
  }
  getUser(id: number): any{
    return this.arrayUser.find((x)=>{
      return x.id = id;
    })
  }
  createUser(user: any): any{
    this.arrayUser.push(user);
  }
  updateUser(newName: any): any{
    let temp = this.arrayUser.find((x)=>{
      return x.id = newName.id;
      
    })
    if(temp == -1){
      console.log("Thất bại");
    }
    else{
      return this.arrayUser.name=newName.name;
    }
  }

  

}
