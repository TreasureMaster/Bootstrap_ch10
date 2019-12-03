$(document).ready(function() {
  // Удаление индикатора загрузки
  $('.loading').remove();
  // Активация всплывающих подсказок
  $('[data-toggle="tooltip"]').tooltip();
  // Поворот стрелок в меню
  $('ul.nav a', '#side-menu').has('span.fa-chevron-right').click(function (e) {
    e.preventDefault();
    let $degree = $(this).find('span.fa-chevron-right');
    if ($degree.hasClass('fa-rotate-90')) {
      $degree.removeClass('fa-rotate-90');
    } else {
      $degree.addClass('fa-rotate-90');
    }
  });

  // Модуль Easy Pie Chart
  $('.round-chart').easyPieChart({
    // Цвет шкалы или false, чтобы отключить
    'scaleColor': false,
    // Ширина круговой линии в px
    'lineWidth': 20,
    // Определяет как выглядит окончание линии бара (butt, round или square)
    'lineCap': 'butt',
    // Цвет круга
    'barColor': '#6d5cae',
    // Цвет заполненной дорожки или false, чтобы отключить
    'trackColor': '#e5e9ec',
    // Размер круговой линии в px
    'size': 190
  });

  // Плагин Highcharts
  $('.spider-chart', '#performance-eval').highcharts({
    // Общие настройки диаграммы
    chart: {
      // Выбор полярной систему координат
      polar: true,
      // Тип серии по умолчанию для диаграммы (по умолчанию задана line)
      type: 'area'
    },
    // Заголовок диаграммы
    title: {
      // Текстовый заголовок диаграммы (чтобы отключить нужно установить text или undefined)
      text: ''
    },
    // Настройки оси X (обычно горизонтальная)
    xAxis: {
      // Вместо чисел на этой оси используются имена
      categories: ['Taming', 'Acessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
      // Только для осей с категориями (метка ставится либо между категориями between, либо по центру on)
      tickmarkPlacement: 'on',
      // Ширина линии оси (по умолчанию 1)
      lineWidth: 0
    },
    // Настройки оси Y (обычно вертикальная)
    yAxis: {
      // Только для полярных координат. Линии сетки рисуются либо в виде многоугольника (polygon), либо в виде круга (circle)
      gridLineInterpolation: 'polygon',
      // Ширина линии оси (по умолчанию 0)
      lineWidth: 0,
      // Минимальное значение оси Y (если 0, значение вычисляется автоматически. По умолчанию undefined)
      min: 0
    },
    // Параметры всплывающей подсказки, когда пользователь наводит курсор на серию или точку
    tooltip: {
      // Если true, то вся область графика будет захватывать движения мыши (по умолчанию false)
      // Если true, то данные с обоих графиков во всплывающей подсказке, если false - с ближайшей точки
      shared: true,
      // HTML-код точки всплывающей подсказки. Переменные заключены в фигурные скобки.
      // Доступны point.x , point.y , series.name , series.color
      // В span содержится маркировка пункта (цветной кружок 25CF в данном случае). После идет имя серии.
      // Затем значение точки
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br>',
      // Строка для добавления префикса перед значением каждой серии (можно установить ${point.y} в pointFormat)
      valuePrefix: '$',
      // Строка для добавления суффикса после каждой серии (можно установить после {point.y} USD в pointFormat)
      valueSuffix: ' USD'
    },
    // Настройки легенды-описания каждого элемента серии
    legend: {
      // Горизонтальное выравнивание поля легенды (left, center или right, по умолчанию - center)
      align: 'right',
      // Вертикальное выравнивание легенды (top, center или bottom, по умолчанию - bottom)
      verticalAlign: 'top',
      // Ширина поля легенды в px (но с версии 7.0.2 можно устанавливать %)
      y: 70,
      // Расположение элементов легенды (horizontal, vertical или proximate)
      // Если proximate, то элементы легенды будут как можно ближе к графикам
      layout: 'vertical'
    },
    // Описание серий и данных для них для каждого типа в API (в нашем случае - polygon)
    series: [{
      // Имя серии, которое показывается в легенде, всплывающей подсказке и т.п.
      name: 'Allocated resources',
      // Массив данных (координат точек) для серии
      data: [45000, 39000, 58000, 63000, 38000, 93000],
      // Размещение данных точки (on, between или number)
      pointPlacement: 'on',
      // Индивидуальный цвет точки
      color: '#676f84'
    },
    {
      name: 'Spent resources',
      data: [83000, 49000, 60000, 35000, 77000, 90000],
      pointPlacement: 'on',
      color: '#f35958'
    }]
  });

  // Инициализация плагина switchery
  var elems, switcheryOpts;
  // Находим элементы с классом .switchery
  elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
  // В опциях определяем только цвет элемента (можно определять размер size, скорость анимации speed,
  // различные цвета secondaryColor, jackColor, jackSecondaryColor, подключать стилизацию className,
  // доступен или нет элемент disabled, прозрачность недоступного элемента disabledOpacity)
  switcheryOpts = {
    color: '#1bc98e'
  };
  // Инициализация объектов Switchery
  elems.forEach(function(el) {
    var switchery = new Switchery(el, switcheryOpts);
  });

  // Анимация процента свободного пространства
  var changeMultiplier = 0.2;
  window.setInterval (function() {
    let freeSpacePercentage, delta;

    freeSpacePercentage = $('#free-space').text();
    freeSpacePercentage = parseFloat (freeSpacePercentage);
    delta = changeMultiplier * (Math.random() < 0.5 ? -1.0 : 1.0);
    freeSpacePercentage = freeSpacePercentage + freeSpacePercentage * delta;
    freeSpacePercentage = parseInt (freeSpacePercentage);
    $('#free-space').text(freeSpacePercentage + '%');
  }, 3000);

  // Круговая диаграмма Highcharts
  $('.area-chart', '#daily-usage').highcharts({
    // Основной заголовок
    title: {
      // текст заголовка
      text: ''
    },
    // всплывающие подсказки
    tooltip: {
      // HTML-форматирование вывода (непонятно сокращение, выводит странную информацию)
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    // объект-оболочка для каждого типа конфигурации серии
    plotOptions: {
      // Параметры круговой диаграммы
      pie: {
        // Опции для меток данных серии, опявляющихся рядом с каждой точкой данных
        dataLabels: {
          // не описано в документации
          enabled: true,
          // Стили меток
          style: {
            // Толщина текста (также используются color, fontSize и textOutline)
            fontWeight: '300'
          }
        }
      }
    },
    // Описание серий и данных для них для каждого типа в API
    series: [{
      // Тип серии
      type: 'pie',
      // Имя серии, показываемое в легенде и всплывающих подсказках
      name: 'Time share',
      // Массив данных точек для серии
      data: [
        ['Front yard', 10.38],
        ['Closet', 26.33],
        ['Swim pool', 51.03],
        ['Like a boss', 4.77],
        ['Barking', 3.93]
      ]
    }]
  });
});