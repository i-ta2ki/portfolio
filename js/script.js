/*　ロード中はロード画面を表示するアニメーション　*/
const loading = document.querySelector('#loading');
window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

/* 開いているページの通りナビゲーションバーにアンダーラインを表示するアニメーション */
document.addEventListener("DOMContentLoaded", function() {
  // TOPページの場合
  if (document.body.id === "top-page") {
    const topLink = document.querySelector('.navbar a[href="#top"]');
    if (topLink) {
      topLink.style.borderBottom = "2px solid white";
    }
  }

  // VISIONページの場合
  if (document.body.id === "vision-page") {
    const serviceLink = document.querySelector('.navbar a[href="#vision"]');
    if (serviceLink) {
      serviceLink.style.borderBottom = "2px solid white";
    }
  }

  // IDEAページの場合
  if (document.body.id === "idea-page") {
    const serviceLink = document.querySelector('.navbar a[href="#idea"]');
    if (serviceLink) {
      serviceLink.style.borderBottom = "2px solid white";
    }
  }

  // MEMBERページの場合
  if (document.body.id === "member-page") {
    const serviceLink = document.querySelector('.navbar a[href="#member"]');
    if (serviceLink) {
      serviceLink.style.borderBottom = "2px solid white";
    }
  }

  // CONTACTページの場合
  if (document.body.id === "contact-page") {
    const serviceLink = document.querySelector('.navbar a[href="#contact"]');
    if (serviceLink) {
      serviceLink.style.borderBottom = "2px solid white";
    }
  }
});



/*★IDEAページ*/
$(document).ready(function(){
  $('.image-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: '40px',
    variableWidth: false
  });

  // 初期表示
  var initialDescription = $('.slick-center img').data('description');
  updateDescriptionText(initialDescription);
  console.log(initialDescription);

  // スライドの変更後に説明テキストを更新
  $('.image-slider').on('afterChange', function(event, slick, currentSlide){
    var centerSlide = slick.$slides.eq(currentSlide).find('img');
    var description = centerSlide.data('description');
    updateDescriptionText(description);
    console.log(description);
  });

  // 説明テキストを更新する関数
  function updateDescriptionText(description) {
    var heading = description.split('\n')[0]; // 見出しを取得
    var fullDescription = getAdditionalTexts(description); // 見出しに対応する説明文を取得

    $('#image-description p').stop(true, true).fadeOut(200, function() {
      $(this).css({
        position: 'relative',
        top: '-10px'
      }).html('<span style="font-size: 36px; font-weight: bold;">' + heading + '<span style="font-size: 16px; font-weight: normal;">' + fullDescription + '</span>').fadeIn(500).animate({
        opacity: 1,
        top: '0px'
      }, {
        duration: 500,
        step: function(now, fx) {
          if (fx.prop === 'top') {
            $(this).css('top', now + 'px');
          }
        },
        complete: function() {
          // 上から順番に表示するアニメーションを開始
          $('#image-description p span').each(function(index) {
            $(this).delay(500 * index).fadeIn(1000);
          });
        }
      });
    });
  }

  // サンプルの追加テキストを生成する関数
  function getAdditionalTexts(description) {
    if (description.includes('後付けスマートポール')) {
      return '市場価値は無限大。<br>多様なセンサーとの融合で未来を形作る。<br>某有名企業とのタイアップも決定。';
    } else if (description.includes('画像解析サイネージ')) {
      return '画像解析(属性認証、感情認証)とサイネージを組み合わせたマーケティングソリューション。<br>某有名企業のポップアップイベントでPoCが決定。年齢・性別・表情などを判別してデータを集計することが可能。';
    } else if (description.includes('Jchaser')) {
      return '監視カメラ映像をクラウドに。<br>どこにいてもどの端末からでも映像の確認が可能。<br>大手銀行もデータのクラウド化が進んでおり、クラウドはますます業界のスタンダードに。';
    } else if (description.includes('エネルギーハーベスト')) {
      return '振動からエネルギーを生みだす未来のセンサー。<br>京都大学とJKPIにより共同研究を行っており、PoCを実施中。<br>今後効率的、継続的なエネルギー創出が可能となれば未来のエネルギー供給源に。';
    } else if (description.includes('AIコンシェルジュ')) {
      return '完全なAIとの対話システムによる自動応対コンシェルジュ。<br>今後企業のデータベースや画像解析システムと連動することで、特定人物の現在位置や対応方法を学習することも可能になる予定。<br>まずは、PoCを目指し活動中。';
    } else if (description.includes('微粒子可視化システム')) {
      return '微粒子を可視化し映像上に表示する技術を開発。(特許出願中)<br>煙を可視化することで火災報知器よりも早い火災の検出が可能に。<br>現在は概念実証(PoC)も完了しており、売り先を探している段階。';
    } else {
      return 'その他の詳細情報1。<br>その他の詳細情報2。';
    }
  }  
});









/*★MEMBERページ*/
/*画像ギャラリー
================================================ */
document.addEventListener("DOMContentLoaded", function() {
  const mainImage = document.querySelector('.gallery-image img');
  const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
  const descriptionElement = document.getElementById("image-description-member");

  // 初期表示時に説明文を設定
  if (mainImage.src.includes("images/Thumbnail_1.jpg")) {
    descriptionElement.style.letterSpacing = "2px";
    descriptionElement.innerHTML = "名前：サム<br> 所属：ビジネスデザイン部<br> 経歴：機構設計技術者";
  } else {
    descriptionElement.innerHTML = ""; // 他の画像の場合、説明文をクリア
  }

  thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover', (event) => {
      mainImage.src = event.target.src;
      mainImage.animate({opacity: [0, 1]}, 300);
  
      // 画像が「images/Thumbnail_1.jpg」の場合に説明文を表示
      if (mainImage.src.includes("images/Thumbnail_1.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：サム<br> 所属：部長<br> 経歴：機構設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_2.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：アンジェリーナ<br> 所属：事業創造グループ<br> 経歴：営業出身";
      } else if (mainImage.src.includes("images/Thumbnail_3.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ジョン<br> 所属：新規事業創造グループ<br> 経歴：営業出身";
      } else if (mainImage.src.includes("images/Thumbnail_4.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：オーバメヤン<br> 所属：新規事業創造グループ<br> 経歴：営業出身";
      } else if (mainImage.src.includes("images/Thumbnail_5.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ギタリスト<br> 所属：新規事業創造グループ<br> 経歴：機構設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_6.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ゼイン<br> 所属：新規事業創造グループ<br> 経歴：SI出身";
      } else if (mainImage.src.includes("images/Thumbnail_7.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ジェニファー<br> 所属：新規事業創造グループ<br> 経歴：営業出身";
      } else if (mainImage.src.includes("images/Thumbnail_8.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：キッド<br> 所属：新規事業創造グループ<br> 経歴：営業出身";
      } else if (mainImage.src.includes("images/Thumbnail_9.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：チャン<br> 所属：新規事業創造グループ<br> 経歴：機構設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_10.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ペップ<br> 所属：新規事業開発グループ<br> 経歴：ソフト設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_11.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：ウォン<br> 所属：新規事業開発グループ<br> 経歴：ソフト設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_12.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：カーダシアン<br> 所属：新規事業開発グループ<br> 経歴：ソフト設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_13.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：シャム<br> 所属：新規事業開発グループ<br> 経歴：ソフト設計技術者";
      } else if (mainImage.src.includes("images/Thumbnail_14.jpg")) {
        descriptionElement.style.letterSpacing = "2px";
        descriptionElement.innerHTML = "名前：クリスティーナ<br> 所属：新規事業開発グループ<br> 経歴：ソフト設計技術者";
      } else {
        descriptionElement.innerHTML = ""; // 他の画像の場合、説明文をクリア
      }
    });
  });
});

/*★CONTACTページ*/
document.addEventListener("DOMContentLoaded", function() {
  const freeField = document.getElementById('free');
  const submitBtn = document.getElementById('submit-btn');

  function checkField() {
    const freeFilled = freeField.value.trim() !== '';
    submitBtn.disabled = !freeFilled;

    // 無効時のスタイルを手動で適用
    if (!freeFilled) {
      submitBtn.style.backgroundColor = "#d3d3d3";
      submitBtn.style.color = "#a9a9a9";
    } else {
      submitBtn.style.backgroundColor = "#333"; // 有効時の色に戻す
      submitBtn.style.color = "white"; // 有効時のテキスト色に戻す
    }
  }

  freeField.addEventListener('input', checkField);
  
  // 初期チェック
  checkField();
});

