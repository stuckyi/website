import { Injectable } from '@angular/core';

import { CONTENTS, Content, CONTENT_ABOUT } from './data/contents';

@Injectable()
export class AppService {
  content: Content;
  content_about = CONTENT_ABOUT;
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

  getContentAbout() {
    return this.content_about;
  }

}
