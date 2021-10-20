/*** First Chart in Dashboard page ***/

//jQuery(document).ready(function ($) {

//    var obj = { "returntype": 1 };
//    var params = JSON.stringify(obj);

//    $.ajax({
//        type: "Post",
//        datatype: "json",
//        url: "./webservice/achievementRate.asmx/getAchievementRate",
//        data: params,
//        contentType: "application/json; charset=utf-8",
//        success: function (data, textStatus, xhr) {
//            document.getElementById("loadRate").innerHTML = data.d[0].y+"%";
//            info = new Highcharts.Chart({
//			chart: {
//				renderTo: 'load',
//				margin: [0, 0, 0, 0],
//				backgroundColor: null,
//                plotBackgroundColor: 'none',
							
//			},
			
//			title: {
//				text: null
//			},

//			credits: {
//			    enabled: false
//			},

//			tooltip: {
//				formatter: function() { 
//					return this.point.name +': '+ this.y +' %';
						
//				} 	
//			},
//		    series: [
//				{
//				borderWidth: 2,
//				borderColor: '#F1F3EB',
//				shadow: false,	
//				type: 'pie',
//				name: 'Income',
//				innerSize: '65%',
//				data: 
//					data.d,
//				dataLabels: {
//					enabled: false,
//					color: '#000000',
//					connectorColor: '#000000'
//				},
//		    }]

//            });
//        },
//        error: function (xhr, textStatus, errorThrown) {
//            document.getElementById("loadRate").innerHTML = "0%";
//            info = new Highcharts.Chart({
//                chart: {
//                    renderTo: 'load',
//                    margin: [0, 0, 0, 0],
//                    backgroundColor: null,
//                    plotBackgroundColor: 'none',
							
//                },
			
//                title: {
//                    text: null
//                },

//                credits: {
//                    enabled: false
//                },

//                tooltip: {
//                    formatter: function() { 
//                        return this.point.name +': '+ this.y +' %';
						
//                    } 	
//                },
//                series: [
//                    {
//                        borderWidth: 2,
//                        borderColor: '#F1F3EB',
//                        shadow: false,	
//                        type: 'pie',
//                        name: 'Income',
//                        innerSize: '65%',
//                        data: [
//                            { name: '達成', y: 0, color: '#b2c831' },
//                            { name: '未達成', y: 100, color: '#3d3d3d' }
//                        ],
//                        dataLabels: {
//                            enabled: false,
//                            color: '#000000',
//                            connectorColor: '#000000'
//                        },
//                    }]

//            });
//            alert(xhr.responseText);
//        }
//    });

		
//	});

/*** second Chart in Dashboard page ***/

//jQuery(document).ready(function ($) {

//		var obj = { "returntype": 2 };
//		var params = JSON.stringify(obj);

//		$.ajax({
//		    type: "Post",
//		    datatype: "json",
//		    url: "./webservice/achievementRate.asmx/getAchievementRate",
//		    data: params,
//		    contentType: "application/json; charset=utf-8",
//		    success: function (data, textStatus, xhr) {
//		        document.getElementById("spaceRate").innerHTML = data.d[0].y + "%";
//		        info = new Highcharts.Chart({
//		            chart: {
//		                renderTo: 'space',
//		                margin: [0, 0, 0, 0],
//		                backgroundColor: null,
//		                plotBackgroundColor: 'none',

//		            },

//		            title: {
//		                text: null
//		            },

//		            credits: {
//		                enabled: false
//		            },

//		            tooltip: {
//		                formatter: function () {
//		                    return this.point.name + ': ' + this.y + ' %';

//		                }
//		            },
//		            series: [
//                        {
//                            borderWidth: 2,
//                            borderColor: '#F1F3EB',
//                            shadow: false,
//                            type: 'pie',
//                            name: 'SiteInfo',
//                            innerSize: '65%',
//                            data: 
//                                data.d
//                            ,
//                            dataLabels: {
//                                enabled: false,
//                                color: '#000000',
//                                connectorColor: '#000000'
//                            },
//                        }]

//		        });


//		    },
//		    error: function (xhr, textStatus, errorThrown) {
//		        document.getElementById("spaceRate").innerHTML = "0%";
//		        info = new Highcharts.Chart({
//		            chart: {
//		                renderTo: 'space',
//		                margin: [0, 0, 0, 0],
//		                backgroundColor: null,
//		                plotBackgroundColor: 'none',

//		            },

//		            title: {
//		                text: null
//		            },

//		            credits: {
//		                enabled: false
//		            },

//		            tooltip: {
//		                formatter: function () {
//		                    return this.point.name + ': ' + this.y + ' %';

//		                }
//		            },
//		            series: [
//                        {
//                            borderWidth: 2,
//                            borderColor: '#F1F3EB',
//                            shadow: false,
//                            type: 'pie',
//                            name: 'SiteInfo',
//                            innerSize: '65%',
//                            data: [
//                                { name: '達成', y: 0, color: '#fa1d2d' },
//                                { name: '未達成', y: 100, color: '#3d3d3d' }
//                            ],
//                            dataLabels: {
//                                enabled: false,
//                                color: '#000000',
//                                connectorColor: '#000000'
//                            },
//                        }]

//		        });
//		        alert(xhr.responseText);
//		    }
//		});

		
//});

//var randomScalingFactor = function () {
//    return Math.round(Math.random() * 100);
//};

//var config = {
//    type: 'doughnut',
//    data: {
//        datasets: [{
//            data: [
//                randomScalingFactor(),
//                randomScalingFactor(),
//            ],
//            backgroundColor: [
//                '#b2c831',
//                '#3d3d3d',
//            ]
//        }],
//        labels: [
//            '達成',
//            '未達成'
//        ]
//    },
//    options: {
//        responsive: true,
//        maintainAspectRatio: false,
//        cutoutPercentage:65,
//        legend: {
//            position: 'top',
//            display: false
//        },
//        title: {
//            display: true,
//            text: '今月のCM受給権利',
//            fontColor: '#fff',
//            fontSize: 16,
//            fontStyle: 'normal'
//        },
//        animation: {
//            animateScale: true,
//            animateRotate: true
//        },
//        layout: {
//            padding: {
//                left:0,
//                right:0,
//                top:0,
//                bottom:10
//            }
//        }
//    }
//};

jQuery(document).ready(function ($) {
    var ctx = document.getElementById('chart-area').getContext('2d');
    //document.getElementById("spaceRate").innerHTML = "100%";
    //window.myDoughnut = new Chart(ctx, config);

    var obj = { "returntype": 1 };
    var params = JSON.stringify(obj);

    $.ajax({
        type: "Post",
        datatype: "json",
        url: "./webservice/achievementRate.asmx/getAchievementRate",
        data: params,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, xhr) {
            document.getElementById("loadRate").innerHTML = data.d[0].y + "%";
            window.myDoughnut = new Chart(
                ctx,
                info = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [
                                data.d[0].y,
                                data.d[1].y,
                            ],
                            backgroundColor: [
                                data.d[0].color,
                                data.d[1].color,
                            ]
                        }],
                        labels: [
                            data.d[0].name,
                            data.d[1].name
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 65,
                        legend: {
                            position: 'top',
                            display: false
                        },
                        title: {
                            display: true,
                            text: '今月のCM受給権利',
                            fontColor: '#fff',
                            fontSize: 16,
                            fontStyle: 'normal'
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 10
                            }
                        }
                    }
                });
        }, error: function (xhr, textStatus, errorThrown) {

        }
    });
});

jQuery(document).ready(function ($) {
    var ctx = document.getElementById('chart-area2').getContext('2d');
    //document.getElementById("loadRate").innerHTML = "100%";
    //window.myDoughnut = new Chart(ctx, config);

    var obj = { "returntype": 2 };
    var params = JSON.stringify(obj);

    $.ajax({
        type: "Post",
        datatype: "json",
        url: "./webservice/achievementRate.asmx/getAchievementRate",
        data: params,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, xhr) {
            document.getElementById("spaceRate").innerHTML = data.d[0].y + "%";
            window.myDoughnut = new Chart(
                ctx,
                    info = {type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [
                                data.d[0].y,
                                data.d[1].y,
                            ],
                            backgroundColor: [
                                data.d[0].color,
                                data.d[1].color,
                            ]
                        }],
                        labels: [
                            data.d[0].name + "%",
                            data.d[1].name + "%"
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 65,
                        legend: {
                            position: 'top',
                            display: false
                        },
                        title: {
                            display: true,
                            text: '今月タイトル達成',
                            fontColor: '#fff',
                            fontSize: 16,
                            fontStyle: 'normal'
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 10
                            }
                        }
                    }
            });
        }, error: function (xhr, textStatus, errorThrown) {

        }
    });

});





