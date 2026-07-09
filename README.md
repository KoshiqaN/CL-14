/* 繝壹�繧ｸ蜈ｨ菴� */
body {
  margin: 0;
  padding: 2rem 1rem;
  font-family: "Hiragino Sans", "Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif;
  background: #eef6ea;
  text-align: center;
}

h1 {
  margin: 0 0 0.3rem;
  color: #3a5a40;
}

.lead {
  margin: 0 0 1.2rem;
  color: #556b2f;
}

/* 繧ｹ繝��繧ｸ�郁レ譎ｯ逕ｻ蜒上→蜷後§ 960ﾃ�534 縺ｮ邂ｱ�� */
.stage {
  position: relative;
  width: 960px;
  height: 534px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* 閭梧勹 2 譫夲ｼ�bg0�壹≧縺励ｍ�獣g1�壽焔蜑搾ｼ� */
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 960px;
  height: 534px;
}

.bg.front {
  z-index: 3; /* 縺�■縺ｰ繧捺焔蜑榊ｯ�ｊ縺ｮ閭梧勹�育ｪ薙′蜊企乗�縺ｧ bg0 縺碁上￠繧具ｼ� */
}

/* 蟆上＆縺ｪ逕溘″繧ゅ���bg0 縺ｨ bg1 縺ｮ髢� 竊� 遯薙�荳ｭ縺ｫ縺�ｋ繧医≧縺ｫ隕九∴繧具ｼ� */
.foo {
  position: absolute;
  width: 56px;
  left: 500px;
  top: 230px;
  z-index: 2;
  transition: left 0.6s ease, top 0.6s ease;
  cursor: pointer;
}

/* 陜ｶ�医＞縺｡縺ｰ繧捺焔蜑搾ｼ� */
.butterfly {
  position: absolute;
  width: 80px;
  z-index: 4;
  transition: left 0.5s ease, top 0.5s ease;
  cursor: pointer;
}

.butterfly:nth-of-type(1) { left: 80px;  top: 400px; }
.butterfly:nth-of-type(2) { left: 420px; top: 450px; }
.butterfly:nth-of-type(3) { left: 780px; top: 410px; }

/* 繧ｹ繝槭�縺ｪ縺ｩ縺ｮ迢ｭ縺�判髱｢縺ｧ縺ｯ繧ｹ繝��繧ｸ縺斐→邵ｮ蟆上＠縺ｦ陦ｨ遉ｺ */
@media (max-width: 1000px) {
  .stage {
    transform: scale(calc(100vw / 1000));
    transform-origin: top center;
  }
}
