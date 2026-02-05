const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        
        // Toggle dropdown
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = langDropdown.classList.contains('hidden');
            if (isHidden) {
                langDropdown.classList.remove('hidden', 'fade-exit', 'fade-exit-active');
                langDropdown.classList.add('flex', 'fade-enter');
                requestAnimationFrame(() => {
                    langDropdown.classList.add('fade-enter-active');
                    langDropdown.classList.remove('fade-enter');
                });
            } else {
                closeDropdown();
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
                closeDropdown();
            }
        });

        function closeDropdown() {
            if (!langDropdown.classList.contains('hidden')) {
                langDropdown.classList.add('fade-exit');
                langDropdown.classList.add('fade-exit-active');
                setTimeout(() => {
                    langDropdown.classList.add('hidden');
                    langDropdown.classList.remove('flex', 'fade-exit', 'fade-exit-active');
                }, 200);
            }
        }

        function selectLang(code, name) {
            const span = langBtn.querySelector('span');
            span.textContent = code;
            
            // Visual feedback on checkmarks
            const buttons = langDropdown.querySelectorAll('button');
            buttons.forEach(btn => {
                const icon = btn.querySelector('iconify-icon');
                const btnText = btn.querySelector('span').innerText;
                if(btnText === name) {
                    icon.classList.remove('opacity-0', 'group-hover:opacity-50');
                    icon.classList.add('opacity-100');
                    btn.querySelector('span').classList.add('text-white');
                    btn.querySelector('span').classList.remove('text-zinc-400');
                } else {
                    icon.classList.add('opacity-0', 'group-hover:opacity-50');
                    icon.classList.remove('opacity-100');
                    btn.querySelector('span').classList.add('text-zinc-400');
                    btn.querySelector('span').classList.remove('text-white');
                }
            });
            closeDropdown();
        }