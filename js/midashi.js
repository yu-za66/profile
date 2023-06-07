function onLoad() {

  const contents = document.querySelectorAll('.content');
  const toc = document.querySelectorAll('.toc');
  const tocMap = new Map();

  // IntersectionObserverでコンテンツの出入りを監視
  const intersectCallback = (entries) => {
    entries.forEach((element) => {
      if (element.intersectionRatio) {
        tocMap.get(element.target).classList.add('active');
      } else {
        tocMap.get(element.target).classList.remove('active');
      }
    });
  };
  // wrapperの上辺を現在地の基準点にしたいので、rootMarginで微調整

  const options = {
    root: document.querySelector('.wrapper'),
    rootMargin: '-1px 0px -99% 0px',
  };
  const observer = new IntersectionObserver(intersectCallback, options);

  // コンテンツをIntersectionObserverに登録
  contents.forEach((content, i) => {
    observer.observe(content);
    tocMap.set(content, toc.item(i));
    tocMap.set(toc.item(i), content);
  });
  // 目次にクリックイベントリスナを登録
  toc.forEach((item) => {
    item.addEventListener('click', (event) => {
      tocMap.get(event.target).scrollIntoView();
    });
  });
}


