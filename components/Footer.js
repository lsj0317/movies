// components/Footer.js
function renderFooter() {
    const footerHTML = `
    <footer class="w-full p-8 bg-white mt-20">
        <div class="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
            <img src="https://www.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" class="w-10" />
            
            <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a href="#" class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                        서비스 소개
                    </a>
                </li>
                <li>
                    <a href="#" class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                        이용약관
                    </a>
                </li>
                <li>
                    <a href="#" class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                        개인정보처리방침
                    </a>
                </li>
                <li>
                    <a href="#" class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                        고객센터
                    </a>
                </li>
            </ul>
        </div>
        <hr class="my-8 border-blue-gray-50" />
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
            &copy; 2024 Movie Hub Community. All Rights Reserved.
        </p>
    </footer>`;

    const footerElement = document.getElementById('footer-container');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', renderFooter);
