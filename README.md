# Q-Checker

## 🚀프로젝트 소개 
- QR 및 NFC 활용 출결 관리 어플리케이션

<br>

##  🚀프로젝트 개요
- 프로젝트 기간: 2025.03 ~ 2025.11
- 목표: 동아리 출결 관리 및 축제 인원 관리 등 기존의 출결 앱보다 확장성을 넓히는 개발
- 목적: GPS와 QR 코드, 혹은 NFC를 활용한 출입 관리 모바일 애플리케이션 개발

<br>

##  👨‍👩‍👧‍👦팀원 구성

<img width="600" height="680" alt="26" src="https://github.com/user-attachments/assets/f0662456-e599-4338-b615-6be23341c263" />
<br>

## 🛠️시스템 아키텍처
<img width="600" height="680" alt="image" src="https://github.com/user-attachments/assets/b42fe889-83db-418c-9a95-2416fe895e6c" />
<br>


## 페이지별 기능

### 0) 마이 페이지
- 출결 내역 저장: 사용자의 출결 내역을 저장할 수 있습니다.
- 정보 수정: 사용자의 성명, 학번 등 개인정보를 수정하고 학생 인증 여부를 확인할 수 있습니다.
- 인증은 이메일 인증으로 진행이 가능합니다.

|출결 내역|이메일 인증|
|-------|-------|
|<img width="430" height="908" alt="image 59 (1)" src="https://github.com/user-attachments/assets/820bc166-14aa-45bc-83a9-8660727fa685" />|<img width="436" height="921" alt="image 60" src="https://github.com/user-attachments/assets/77ddbb81-6793-41c0-8a41-a5ce8f7a903a" />|
<br>
  
### 1) 메인 페이지
- 이벤트 관리자와 이벤트 참여자, 두 가지의 역할을 수행 가능하며, 생성한 이벤트들을 관리할 수 있습니다.
- 이벤트 생성 내역:
  해당 행사 관리자는 앱을 통해 자신이 생성한 이벤트 내역 목록을 확인할 수 있습니다.
  우측의 원형 아이콘을 통해 활성화(초록)  비활성화(회색) 여부 알 수 있습니다.
- 주기능 이동: 모든 유저는 필요에 따라 이벤트 관리자와 이벤트 참여자 두 역할을 모두 수행 가능합니다.

|메인 페이지|
|---|
|!<img width="430" height="908" alt="image 52" src="https://github.com/user-attachments/assets/1b7c726c-c80c-4948-b596-8339e50183b8" />|

<br>

### 2) 인증 페이지
- 이벤트 참여자의 입장에서, QR 촬영 또는 NFC 태깅 중 선택하여 인증할 수 있다. 단, 관리자가 NFC 방식을 등록한 경우여야 한다.
- QR 촬영 기능: 앱의 카메라 기능을 통하여 사용자는 QR을 인식을 시킵니다.
- NFC 태깅 기능: 앱의 NFC 태그 기능을 통하여 사용자는 NFC를 인식 시킵니다.
  
|NFC|QR|
|---------|---------|
|<img width="385" height="814" alt="image 54" src="https://github.com/user-attachments/assets/e5f8e514-8cdd-4fb3-8aec-9f0a6facccc1" />|<img width="385" height="812" alt="image 53" src="https://github.com/user-attachments/assets/fb0ed945-9299-4e1b-a3c4-9502cf971863" />|

<br>

### 3) 생성 페이지
- 이벤트를 생성할 수 있다. 모든 이벤트는 QR코드를 생성하며, 지정된 장소를 사용하는 경우, NFC를 추가할 수 있습니다.
-  GPS 이벤트를 생성: 이벤트 이름 설정 및 유효시간 설정, GPS 위치(위도,경도) 설정.
-  NFC 이벤트를 생성: 이벤트 이름 설정 및 유효시간 설정, NFC (강의실 번호) 설정.
 
|GPS|NFC|
|--------------|---------------------|
|<img width="386" height="814" alt="image 55" src="https://github.com/user-attachments/assets/d7324250-e474-4c01-88d9-fcb8a02c90ee" />|<img width="386" height="814" alt="image 56" src="https://github.com/user-attachments/assets/5ea0d925-1a98-4c18-a9b2-b794400b1e28" />|
<br>

### 4) 이벤트 페이지
- 사관리자의 입장에서, 생성한 이벤트의 출석 현황을 확인하고 이벤트의 상태를 수정할 수 있다.
- 이벤트 상태 관리: 이벤트를 활성화/비활성화 가능합니다.
- 출석 관리: 이벤트에 출석한 학생 명단을 확인할 수 있습니다.

|QR 이벤트|
|---|
|<img width="389" height="821" alt="image 61" src="https://github.com/user-attachments/assets/5e02ae7e-37d9-45a5-ad42-384f40b02e5a" />|
<br>
