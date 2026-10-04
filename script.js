document.querySelectorAll('.rule-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.rule-list details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const shareButton = document.querySelector('#shareProject');
const shareStatus = document.querySelector('#shareStatus');
shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: document.title,
    text: 'Книжный круг · Գրքի շրջան — открытая полка буккроссинга в Санкт-Петербурге.',
    url: window.location.href,
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      shareStatus.textContent = 'Ссылка на страницу скопирована.';
    }
  } catch (error) {
    if (error.name !== 'AbortError') shareStatus.textContent = 'Скопируйте адрес страницы из строки браузера.';
  }
});

