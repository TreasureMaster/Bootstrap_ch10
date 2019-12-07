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

  // Показ поискового меню на малых экранах
  $('#search-icon').on('click', function(e) {
    e.preventDefault();
    // $('#search').css('display', 'flex');
    $('#search').show();
    // невозможно сделать slideUp, т.к. в B-4 используется flexbox
    // $('#search').slideUp('fast');
    $('input:first', '#search').focus();
  });
  // Убираем строку поиска на малых экранах
  $('input', '#search').on('blur', function(e) {
    if ($("#search-icon").is(':visible')) {
      // $("#search").css('display', 'none');
      $('#search').hide();
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
      align: 'center',
      // Вертикальное выравнивание легенды (top, center или bottom, по умолчанию - bottom)
      verticalAlign: 'top',
      // Вертикальное смещение поля легенды в px (но с версии 7.0.2 можно устанавливать %)
      // y: 70,
      // Расположение элементов легенды (horizontal, vertical или proximate)
      // Если proximate, то элементы легенды будут как можно ближе к графикам
      layout: 'horizontal'
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
    var freeSpacePercentage, delta;

    freeSpacePercentage = $('#free-space').text();
    freeSpacePercentage = parseFloat (freeSpacePercentage);
    delta = changeMultiplier * (Math.random() < 0.5 ? -1.0 : 1.0);
    freeSpacePercentage = freeSpacePercentage + freeSpacePercentage * delta;
    freeSpacePercentage = parseInt(freeSpacePercentage) ? parseInt(freeSpacePercentage) : 32;
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

  // Линейная диаграмма
  $('.stacked-area', '#ration-stock').highcharts({
    // Общие настройки диаграммы
    chart: {
      // Тип серии диаграммы (может быть любым из plotOptions или series)
      type: 'area'
    },
    // Основной заголовок
    title: {
      // Текст заголовка
      text: ''
    },
    // Настройки оси X (обычно горизонтальная)
    xAxis: {
      // Разрешить ли десятичные дроби по этой оси?
      allowDecimals: false,
      // Метки оси показывают число или категорию для каждого деления
      labels: {
        // Функция обратного вызова JS для форматирования метки. Значение задается this.value
        // Дополнительные свойства - axis, chart, isFirst, isLast
        // Значение formatter по умолчанию можно вызвать this.axis.defaultLabelFormatter.call(this) внутри функции
        formatter: function() {
          return this.value; // чистое, не отформатированное число года
        }
      }
    },
    // Настройки оси Y (обычно вертикальная)
    yAxis: {
      // Заголовк оси, показываемый рядом с линией оси
      title: {
        // Текст заголовка
        text: 'Ration stock'
      },
      // Метки оси показывают число или категорию для каждого деления
      labels: {
        // см. выше для оси X
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    // Всплывающие подсказки
    tooltip: {
      // HTML-форматирование вывода
      pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br>warheads in {point.x}'
    },
    // объект-оболочка для каждого типа конфигурации серии
    plotOptions: {
      // Тип площади
      area: {
        // Определяет начальное значение по оси X, если оно не указано в серии
        pointStart: 100,
        // Варианты точечных маркеров линейных рядов. Свойства fillColor, lineColor, lineWidth и др. определяют внешний вид маркеров
        marker: {
          // Включение или отключение маркера точки. Если undefined, то маркеры скрыты, если точки расположены плотно, и показаны в другом случае
          enabled: false,
          // Предопределенная форма или символ для маркера (circle, square, diamond, triangle, triangle-down)
          // Кроме этого можно добавить символ из картинки (url(graphic.png))
          symbol: 'circle',
          // Радиус точечного маркера
          radius: 2,
          // Состояния отдельной точки маркера
          states: {
            // Состояние при наведении курсора на маркер точки
            hover: {
              // Включение/отключение маркера точки
              enabled: true
            }
          }
        }
      }
    },
    // Описание серий и данных для них для каждого типа в API
    series: [{
      // Имя серии, показываемое в легенде и всплывающих подсказках
      name: 'Doge ration stock',
      // Массив данных точек для серии
      data: [null, null, null, null, null, 6, 11, 32, 110, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
      // Основной цвет серии. В линейной серии относится к линии и точечным маркерам
      color: '#1bc98e'
    },
    {
      name: 'Evil cat stock',
      data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 17000, 16000],
      color: '#676f84'
    }]
  });

  // Карусель
  // $('.carousel').carousel();
  // Перейти к слайду 2
  // $('.carousel').carousel(2);
  // перейти к следующему слайду next (или предыдущему prev)
  // $('.carousel').carousel('next');
});