
const projects = [
    {
        id: 1,
        category: "DATA ENGINEERING",
        name: "공정 데이터 관리 시스템",
        description: "공정 데이터를 관리하고 관리 한계를 시각화하는 데이터 관리 시스템",
        details: "Dash, FastAPI, MongoDB를 활용해 공정 데이터를 관리하고 시각화했습니다.",
        stack: ["Python", "Dash", "FastAPI", "MongoDB"],
        image: "/1.png",

        problem: "공정 데이터와 관리 한계를 한눈에 파악하기 어렵다는 문제에 집중했습니다.",

        approach: "Dash로 시각화 화면을 구성하고, FastAPI와 MongoDB를 연결해 데이터 관리 구조를 구현했습니다.",

        result: "공정 데이터와 관리 한계를 함께 확인할 수 있는 시각화 시스템을 구현했습니다.",

        link: "https://github.com/rlaxodud6842/TimeSeries-Data-Management",
        linkLabel: "GitHub에서 보기",
    }, {
        id: 2,
        category: "WEB DEVELOPMENT",
        name: "수강신청 연습 웹사이트",
        description:
            "실제 수강신청과 유사한 환경에서 학생들이 미리 연습할 수 있도록 제작한 웹 서비스",
        details:
            "Flask를 활용해 수강신청 연습 웹사이트를 제작했습니다. 수강신청 전에 충분히 연습할 환경이 부족하다는 문제에서 출발했으며, SNS를 통해 서비스를 공유해 약 800명이 사용했습니다.",
        stack: ["Python", "Flask"],
        image: '/3.png',

        problem:
            "학생들이 실제 수강신청에 앞서 신청 과정을 미리 연습할 수 있는 환경이 부족했습니다.",

        approach:
            "Flask를 활용해 실제 수강신청과 비슷한 방식으로 연습할 수 있는 웹사이트를 제작했습니다.",

        result:
            "완성한 서비스를 SNS를 통해 공유했으며, 약 800명이 사용했습니다.",

        link: 'https://sugang.mydu.duckdns.org/',
        linkLabel: "https://sugang.mydu.duckdns.org/",
    },
    {
        id: 3,
        category: "AI BACKEND / WEB DEVELOPMENT",
        name: "교통 법규 위반 신고 웹 AI 백엔드 서버 구축",
        description:
            "번호판 자동 인식과 AI 챗봇을 연동해 교통 법규 위반 신고 과정을 지원하는 웹 서비스",
        details:
            "Django, FastAPI, Docker를 활용해 웹 서비스와 AI 추론 서버를 연동했습니다. CLIP4STR 기반 번호판 인식과 Qwen 기반 질의응답 기능을 API로 제공하고, 이미지 업로드부터 인식 결과 저장까지의 흐름을 구현했습니다.",
        stack: ["Django", "FastAPI", "Docker", "CLIP4STR", "Qwen"],
        image: '/2.png',

        problem:
            "기존 교통 법규 위반 신고 시스템은 신고 절차가 번거롭고, 자동화 및 실시간 대응 기능이 부족했습니다.",

        approach:
            "Django를 웹 서버로 사용해 사용자 인터페이스, 인증, 데이터 저장을 담당하도록 구성했습니다. FastAPI 기반 AI 추론 서버에서 CLIP4STR 모델을 이용한 번호판 인식과 Qwen 모델을 이용한 교통 관련 질의응답 기능을 REST API로 제공했습니다. 또한 두 모델을 각각 독립적인 Docker 컨테이너로 분리해 실행 환경을 격리했습니다.",

        result:
            "Django와 FastAPI 간 API 연동을 통해 이미지 업로드 → 번호판 인식 → 인식 결과 저장 흐름을 구현했습니다. 번호판 인식과 질의응답 모델을 독립적인 서비스로 구성해 웹 서비스와 AI 추론 기능을 분리했습니다.",

        link: 'https://github.com/rlaxodud6842/EasyReporter',
        linkLabel: "GitHub에서 보기",
    }

];

export default projects;
