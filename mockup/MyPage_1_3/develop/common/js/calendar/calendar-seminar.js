jQuery(document).ready(function ($) {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttonText: {
            today: '今日',
            month: '月'
        },
        // 列の書式
        columnFormat: {
            month: 'ddd'    // 月
        },
        titleFormat: {
            month: 'YYYY年M月'
            //week: 'YYYY年M月D日',
            //day: 'YYYY年M月D日[(]ddd[)]'
        },
        slotEventOverlap: false,
        eventLimit: $(document).width() < 600 ? 1 : true ,
        eventLimitText: '',
        eventLimitClick: 'popover',
        // 高さ
        height: 600,
        // 月名称
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 月略称
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 曜日名称
        dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        // 曜日略称
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],

        // 終日スロットのタイトル
        allDayText: '終日',
        // スロットの時間の書式
        axisFormat: 'H:mm',
        // 時間の書式
        timeFormat: 'H:mm',

        //コアタイム 規定値9-17
        businessHours: {
            start: '09:00',
            end: '18:00'
        },

        //defaultDate: '2015-05-14', 明示しなくてもデフォルトは今日なのでいらない
        editable: false,

        // イベントソース
        googleCalendarApiKey: 'AIzaSyB3WXDKEREXCjyJr73lNC3S4ApFpL2BRRg',
        eventSources: [
            {
                // 日本の祝日
                url: 'https://www.google.com/calendar/feeds/japanese__ja%40holiday.calendar.google.com/public/basic',
                //リンク削除
                success: function (events) {
                    $(events).each(function () {
                        this.url = null;
                    });
                },
                // タイムゾーン
                currentTimezone: 'Asia/Tokyo',
                // 背景色とボーダー色
                color: '#000000',
                // 背景色(colorより優先)
                backgroundColor: '#F19824',
                // ボーダー色(colorより優先)
                borderColor: '#F15A24',
                // 文字色
                textColor: '#EEEEEE'
            }
        ],
        //eventClick: function (event) {
        //    if (event.url) {
        //        window.open(event.url, "_blank");
        //        return false;
        //    }
        //}


    });

    //$('#calendar').addTouch();
});

jQuery(document).ready(function ($) {

$("#ctl00_cph1_ddlAREA").change(function () {
    var str = "";
    str = $(this).val();

    $('#calendar').fullCalendar('removeEvents');
    $('#calendar').fullCalendar({
        // イベントソース
        googleCalendarApiKey: 'AIzaSyB3WXDKEREXCjyJr73lNC3S4ApFpL2BRRg',
        eventSources: [
            {
                // 日本の祝日
                url: 'https://www.google.com/calendar/feeds/japanese__ja%40holiday.calendar.google.com/public/basic',
                //リンク削除
                success: function (events) {
                    $(events).each(function () {
                        this.url = null;
                    });
                },
                // タイムゾーン
                currentTimezone: 'Asia/Tokyo',
                // 背景色とボーダー色
                color: '#000000',
                // 背景色(colorより優先)
                backgroundColor: '#F19824',
                // ボーダー色(colorより優先)
                borderColor: '#F15A24',
                // 文字色
                textColor: '#EEEEEE'
            }
        ]

    });
//イベント情報読み込み
var obj = { "area": str };
var params = JSON.stringify(obj);

$.ajax({
    type: "Post",
    datatype: "json",
    url: "./../../webservice/calendarService.asmx/getTargetAreaSeminar",
    data: params,
    contentType: "application/json; charset=utf-8",
    success: function (data, textStatus, xhr) {
        //$('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', data.d);
    },
    error: function (xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
    }
});

}).change();

$('#calendar').fullCalendar('rendar');

});

