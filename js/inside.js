/**

    判断一个点是否在多边形内部

    @param points 多边形坐标集合

    @param testPoint 测试点坐标

    返回true为真，false为假

*/
 function insidePolygon(points, testPoint) {
    var x = testPoint[0], y = testPoint[1];
    var inside = false;
    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
        var xi = points[i][0], yi = points[i][1];
        var xj = points[j][0], yj = points[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

/**

判断一个点是否在圆的内部
@param point 测试点坐标
@param circle 圆心坐标
@param r 圆半径
返回true为真，false为假
*/
 function pointInsideCircle(point, circle, r) {
    if (r === 0) return false
    var dx = circle[0] - point[0]
    var dy = circle[1] - point[1]
    return dx * dx + dy * dy <= r * r
}

// 经纬度转换成三角函数中度分表形式。
function rad(d) {
    return d * Math.PI / 180.0; 
}


// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度 返回公里数
 function getDistance(lat1, lng1, lat2, lng2) {
    // console.info(lat1, lng1, lat2, lng2)

    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里

    var distance = s;
    var distance_str = "";

    if (parseInt(distance) >= 1) {
        distance_str = distance.toFixed(1) + "km";
    } else {
        distance_str = distance * 1000 + "m";
    }

    //s=s.toFixed(4);

    // console.info('lyj 距离是', s);
    // console.info('lyj 距离是', distance_str);
    return s;
}

/**
 * 校验距离是否正确
 * @param origin [x,y]
 * @param destination [x,y]
 * @param distance 距离 公里数
 */
 function checkDistance(origin, destination, distance) {
    return getDistance(...origin, ...destination) <= distance
}