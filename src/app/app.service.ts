import { Injectable } from '@angular/core';

import { CONTENTS, Content } from './data/contents';

@Injectable()
export class AppService {
  content: Content;
  // contents: Content[];
  contents;


  constructor() {
    this.contents = CONTENTS;
  }
  
  getContent(id: number) {
    return this.contents.find(content => {
      return content.id === id;
    });
  }

  getContents() {
    return this.contents;
  }

}
