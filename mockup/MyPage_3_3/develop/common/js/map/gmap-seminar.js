function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}

jQuery(function ($) {

    // google map 初期化
    var gmap = new google.maps.Map($('#gmap').get(0), {
        //center: new google.maps.LatLng('35.689487', '139.691706'),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 17
    });

    // データリストからピンを設置
    var addmarker = [];
    var infoWindow = [];

    //イベント情報読み込み
    //var obj = { "seminarid": str };
    var obj = { "seminarid": getQuerystring('id') };

    //var obj = { "seminarid": $('#cpBody_fvSeminar_lblINPUTID').text() };
    var params = JSON.stringify(obj);

    $.ajax({
        type: "Post",
        datatype: "json",
        url: "./webservice/mapService.asmx/getSemTargetplace",
        data: params,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, xhr) {
            var geocoder = new google.maps.Geocoder();
            //住所から座標を取得する
            geocoder.geocode(
                    {
                        'address': data.d[0].Address1 + data.d[0].Address2,//検索する住所
                        'region': 'jp'
                    },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            google.maps.event.addDomListener(window, 'load', function () {
                                var map_tag = document.getElementById('map');

                                var targetPos = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                                addmarker[0] = new google.maps.Marker({
                                    position: targetPos,
                                    title: data.d[0].placeName,
                                    animation: google.maps.Animation.DROP,
                                    map: gmap
                                });

                                infoWindow[0] = new google.maps.InfoWindow({ // 吹き出しの追加
                                    content: '<div class="gmap">' + data.d[0].placeName + '<br>〒' + data.d[0].Post + data.d[0].Address1 + '<br>' + data.d[0].Address2 + '<br><a href="http://maps.google.com/maps?q=' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng() + '" target="_brank">Googleマップで見る</a></div>' // 吹き出しに表示する内容
                                });

                                markerEvent(0); // マーカーにクリックイベントを追加
                                gmap.panTo(targetPos);
                            });
                        }
                    }
            );
        },
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr.responseText);
        }
    });

    // マーカーにクリックイベントを追加
    function markerEvent(i) {
        addmarker[i].addListener('click', function () { // マーカーをクリックしたとき
            infoWindow[i].open(gmap, addmarker[i]); // 吹き出しの表示
        });
    }

});
