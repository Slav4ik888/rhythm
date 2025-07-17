import { updateObject, setValue } from 'shared/helpers/objects';


// const b = document.querySelectorAll('.highcharts-credits');
// b.forEach(item => item.remove());

export const getDoughnutOptions = (options = {} as Highcharts.Options): Highcharts.Options => {
  const { accessibility } = options;

  return updateObject({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      },
      backgroundColor: 'transparent',
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: 50,
        depth: 25
      }
    },
    series: [{
      type: 'pie',
      name: '', // Название, показывается при наведении на "кусок" пирога
      dataLabels: {
        enabled: false // отключает подписи значений
      },
      data: [
        ['Norway', 16],
        ['Germany', 12],
        ['Austria', 7],
        ['Canada', 4],
        ['Japan', 3]
      ]
    }]
        // display: setValue(options.plugins?.legend?.display, false),
  }, options);
}
