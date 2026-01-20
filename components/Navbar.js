// components/Navbar.js
function renderNavbar() {
    const navbarHTML = `
    <nav class="block w-full max-w-screen-xl px-4 py-2 mx-auto bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 mt-4">
        <div class="container flex items-center justify-between mx-auto text-blue-gray-900">
            <a href="/pages/index.html" class="mr-4 block cursor-pointer py-1.5 font-sans text-xl font-bold leading-relaxed tracking-normal text-inherit antialiased">
                MOVIE HUB
            </a>
            <div class="hidden lg:block">
                <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        <a href="/pages/ranking.html" class="flex items-center">영화 랭킹</a>
                    </li>
                    <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        <a href="/pages/board.html" class="flex items-center">커뮤니티</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-x-1">
                <button onclick="location.href='/pages/login.html'" class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 lg:inline-block" type="button">
                    로그인
                </button>
            </div>
        </div>
    </nav>`;
    
    // id가 navbar인 엘리먼트에 주입
    const navElement = document.getElementById('navbar-container');
    if (navElement) {
        navElement.innerHTML = navbarHTML;
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', renderNavbar);
