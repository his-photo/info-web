// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('랜딩 페이지가 로드되었습니다.');
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 모든 섹션에 관찰자 추가
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // CTA 버튼 클릭 추적
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('CTA 버튼이 클릭되었습니다.');
        });
    }

    // 지도 링크 클릭 추적
    const mapLinks = document.querySelectorAll('.map-action-btn');
    mapLinks.forEach(link => {
        link.addEventListener('click', function() {
            const service = this.querySelector('strong').textContent;
            console.log('지도 링크 클릭:', service);
        });
    });

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 페이지 가시성 변경 감지
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('페이지가 백그라운드로 전환되었습니다.');
    } else {
        console.log('페이지가 포그라운드로 전환되었습니다.');
    }
});
