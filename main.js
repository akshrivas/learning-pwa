if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
      try {
          const result = await navigator.serviceWorker.register('sw.js');
          console.log('Registered', result);
      } catch (error) {
          console.log('Not registered', error);
      }
  });
}