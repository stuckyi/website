# Website


## plan


### Assets
---

#### Font

- [ ] font loading 효율화 작업
  - [ ] font compress 
  - [ ] update font loading process


#### Favicon

- [ ] favicon 프로세스 이해 및 확인
  - [x] favicons 단순 적용


#### Language

- [ ] content translation (ko -> en)
- [ ] language support feature





### Javascript

#### Angular

- [ ] 코드 리팩터링(scroll event)
  - [ ] use another rxjs operator
  - [ ] make method to directive file



#### Creative Coding

- [ ] mainjam ideation
- [ ] mainjam concept fix
- [ ] mainjam develeopment


point

- 크게 세 파트다. hero, works, about.
- hero에서 너무 많은 것이 들어가 어디를 봐야할 지 모르겠으면 안된다는.



1. hero : 미세먼지 particle
2. works : eye tracking (work를 보는 데 방해가 되지 않을 정도지만, 그래도 재미는 있는.)
3. about : 아직 미정




## 1. hero : 미세먼지 particle

- api 3종 있다.
  - 기준 위치를 어디로 잡느냐가 관건
    - 서울 위치
    - 사용자 동의 얻고 사용자 위치
    - api를 쓰지 않는다.

- api 데이터로 상태를 색상이나 particle의 수로 표현가능(혹은 둘 다 )
  - particle
    - 수 : 미세먼지의 농도에 비례
    - 입자 크기 : 랜덤이거나, pm10은 pm2.5는 grey.

  
## Animation

1. 왼쪽 to 오른쪽 이동: 따로 인터랙션은 없고, 펄린노이즈 적용하여 꿈틀대기
2. 스투키 글자와 충돌하는 것들은 사라지거나, 색이 변하기
3. 스투키 글자를 클릭하면, 스투키가 움찔하면서 빛을 발사하고 미세먼지가 한동안 없어지는 것
4. 미세먼지가 스투키를 빗겨나간다.
5. 마우스 커서가 미세먼지를 빨아들여서 없어지도록 한다.
6. 스투키 글자에 닿으면 미세먼지가 터진다.

> 여기까지인데, 아이디어를 내주면 좋겠다.

- 또는 배경 전체가 점묘화처럼([airtightinteractive.com](airtightinteractive.com))


## 2. Works
- 글자가 처음부터 있지 않아도 된다. [bigyouth.fr/en/projects](bigyouth.fr/en/projects)



> 스투키가 미세먼지를 얼마나.

