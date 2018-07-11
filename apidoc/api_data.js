define({ "api": [
  {
    "type": "POST",
    "url": "apis/v1/adas/reports/GpsInfo",
    "title": "上传adas高德的经纬数据",
    "name": "adasGpsInfo",
    "group": "adas",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "plt",
            "description": "<p>adas系统<a href=\"%E5%8F%AF%E9%80%89,%E9%BB%98%E8%AE%A4101\">101中科慧眼</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dir",
            "description": "<p>角度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>速度 米/秒</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(毫秒long))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id(可选,)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>车辆id(可选,)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "adas"
  },
  {
    "type": "POST",
    "url": "apis/v1/adas/reports/alarm",
    "title": "上传adas的警报",
    "name": "adastAlarm",
    "group": "adas",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarmId",
            "description": "<p>报警</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>预警类型，见附表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dir",
            "description": "<p>角度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>速度 米/秒</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(秒 int))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "adas"
  },
  {
    "type": "POST",
    "url": "apis/v1/adas/reports/media",
    "title": "上传adas的警报多媒体文件",
    "name": "adastmedia",
    "group": "adas",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarmId",
            "description": "<p>报警</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "format",
            "description": "<p>文件类型， 1图片，2视频</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>文件名称，一般用时间表示yyy-MM-ddTHH: mm: ss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>资源下载地址，图片类地址可以根据此地址直接查看</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playUrl",
            "description": "<p>视频类资源，可以根据此地址直接播放</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snapshotUrl",
            "description": "<p>预览图地址，可以根据此地址看视频预览图</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadTime",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(秒 int))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "adas"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/TrafficInfoCount",
    "title": "获得用户上传事件次数",
    "name": "TrafficInfoCount",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户的唯一编码（选填，但是uid和dev 必须有一个被填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码（选填，但是uid和dev 必须有一个被填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/devGpsInfo/range",
    "title": "获得所有设备的位置 通过一个范围",
    "name": "devGpsInforange",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "radius",
            "description": "<p>半径 单位m</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>查询数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "skip",
            "description": "<p>开始index</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "POST",
    "url": "apis/v1/phone/reports/alarm",
    "title": "上传phone的警报",
    "name": "phoneAlarm",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarmId",
            "description": "<p>报警</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>预警类型，见附表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dir",
            "description": "<p>角度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>速度 米/秒</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(毫秒))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/tripList",
    "title": "获得符合条件的一条条行程信息",
    "name": "phoneTripList",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>查询开始行程开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etm",
            "description": "<p>查询开始行程结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每一页获取的条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数 从0开始</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;total&quot;: 7, &quot;data&quot;: [ { &quot;_id&quot;: &quot;5b3372650624b80005ba0e4b&quot;, &quot;deviceId&quot;: &quot;864546030109091&quot;, &quot;source&quot;: 0, &quot;time&quot;: &quot;2018-06-27T11:17:56.753000&quot; }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "POST",
    "url": "apis/v1/phone/reports/GpsInfo",
    "title": "上传手机端高德的经纬数据",
    "name": "postGpsInfo",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "plt",
            "description": "<p>手机端系统<a href=\"%E5%8F%AF%E9%80%89,%E9%BB%98%E8%AE%A4-1\">0:安卓,1:IOS</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dir",
            "description": "<p>角度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>速度 米/秒</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(毫秒long))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id(可选,)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>车辆id(可选,)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "POST",
    "url": "apis/v1/phone/reports/TrafficInfo",
    "title": "上传路况信息",
    "name": "postTrafficInfo",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "plt",
            "description": "<p>手机端系统[0:安卓,1:IOS]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tfct",
            "description": "<p>路况信息类型0：路况 1：施工 2：拥堵 3：积水 4：封路</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lnt",
            "description": "<p>选择车道类型0：对向车道 1：车侧车道 2：中间车道 3：右侧车道</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "act",
            "description": "<p>0：单车事故 1：多车事故 2：严重事故 10：影响通行 11：无法通行 12：长期施工20：轻微拥堵 21：严重拥堵 22：几乎不动 30：影响通行 31：无法通行 32：长期积水40：临时封路 41：长期封路 42：分时段封路</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pic",
            "description": "<p>图片url地址 （暂时不用填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ads",
            "description": "<p>当前地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(毫秒 long))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id(可选,)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>车辆id(可选,)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/tripList/summary",
    "title": "获得设备的某几天的具体行程",
    "name": "tripListSummary",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>统计开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etm",
            "description": "<p>统计结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/tripList/summary/month",
    "title": "获得设备的当月的行程统计",
    "name": "tripListSummaryMonth",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>统计开始时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/phone/summary/tripList/summary/multipleDays",
    "title": "获得设备的某段时间的行程统计",
    "name": "tripListSummaryMultipleDays",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>统计开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etm",
            "description": "<p>统计结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "POST",
    "url": "apis/v1/phone/reports/userEvent",
    "title": "上传用户一些事件",
    "name": "userEvent",
    "group": "phone",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "plt",
            "description": "<p>手机端系统[0:安卓,1:IOS]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dev",
            "description": "<p>设备的唯一编码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "event",
            "description": "<p>事件类型0：打开程序 1：关闭程序 2：开始导航 3：结束导航</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>客户端时间(备注ISO格式 例子&quot;2018-06-20T11:40:33.123Z&quot; 时间为0时间utc标准时间，不要传当地的时间 或者直接上传时间戳(毫秒 long))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "phone"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/alarm",
    "title": "获得一个报警信息所有信息",
    "name": "alarm",
    "group": "web",
    "version": "1.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报警id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;source&quot;: alarm.plt, &quot;warningType&quot;: alarm.gaType, &quot;carType&quot;: &quot;车辆类型&quot;, &quot;name&quot;: &quot;企业名称&quot;, &quot;type&quot;: &quot;企业类型&quot;, &quot;deviceId&quot;: alarm.dev, &quot;vehicle&quot;: &quot;车牌号&quot;, &quot;time&quot;: alarm.ctm, &quot;contact&quot;: &quot;司机姓名&quot;, &quot;phone&quot;: &quot;司机手机号&quot;, &quot;gps&quot;: [alarm.lng, alarm.lat], &quot;message&quot;: &quot;地图打点显示信息&quot; }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controllerV1_1.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/alarm",
    "title": "获得一个报警信息所有信息",
    "name": "alarm",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报警id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;source&quot;: alarm.plt, &quot;warningType&quot;: alarm.gaType, &quot;carType&quot;: &quot;车辆类型&quot;, &quot;name&quot;: &quot;企业名称&quot;, &quot;type&quot;: &quot;企业类型&quot;, &quot;deviceId&quot;: alarm.dev, &quot;vehicle&quot;: &quot;车牌号&quot;, &quot;time&quot;: alarm.ctm, &quot;contact&quot;: &quot;司机姓名&quot;, &quot;phone&quot;: &quot;司机手机号&quot;, &quot;gps&quot;: [alarm.lng, alarm.lat], &quot;message&quot;: &quot;地图打点显示信息&quot; }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/alarmList",
    "title": "获得所有报警信息",
    "name": "alarmList",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 0 安卓 1苹果 101 中科慧眼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>[$gt] 查询开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>获取的条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>跳过的条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;total&quot;: 7, &quot;data&quot;: [{ &quot;_id&quot;: str(alarm.id), &quot;source&quot;: alarm.plt, &quot;warningType&quot;: alarm.gaType, &quot;time&quot;: alarm.ctm, &quot;deviceId&quot;: alarm.dev, &quot;gps&quot;: [alarm.lng, alarm.lat] }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controllerV1_1.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/alarmList",
    "title": "获得所有报警信息",
    "name": "alarmList",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 0 安卓 1苹果 101 中科慧眼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ctm",
            "description": "<p>[$gt] 查询开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>获取的条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>跳过的条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;total&quot;: 7, &quot;data&quot;: [{ &quot;_id&quot;: str(alarm.id), &quot;source&quot;: alarm.plt, &quot;warningType&quot;: alarm.gaType, &quot;time&quot;: alarm.ctm, &quot;deviceId&quot;: alarm.dev, &quot;gps&quot;: [alarm.lng, alarm.lat] }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/carTipList",
    "title": "获得所有车辆提示信息",
    "name": "carTipList",
    "group": "web",
    "version": "0.1.0",
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/carTipList",
    "title": "获得所有车辆提示信息",
    "name": "carTipList",
    "group": "web",
    "version": "0.1.0",
    "filename": "src/jtb_data_web/controllerV1_1.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/devGpsInfo",
    "title": "获得所有设备的位置",
    "name": "devGpsInfo",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省(直辖市)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>地级市(如果是直辖市需要填[])</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>区(县)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>查询数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "skip",
            "description": "<p>开始index</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/trip",
    "title": "获得一个行程信息所有信息",
    "name": "trip",
    "group": "web",
    "version": "1.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>行程id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;source&quot;: 0, &quot;timeStart&quot;: &quot;2018-06-28T01:41:45.618000&quot;, &quot;timeEnd&quot;: &quot;2018-06-28T02:13:32.921000&quot;, &quot;deviceId&quot;: &quot;864546030109091&quot;, &quot;path&quot;: [{ &quot;lnglat&quot;: [116.48976,39.98547] }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controllerV1_1.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/trip",
    "title": "获得一个行程信息所有信息",
    "name": "trip",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>行程id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;source&quot;: 0, &quot;timeStart&quot;: &quot;2018-06-28T01:41:45.618000&quot;, &quot;timeEnd&quot;: &quot;2018-06-28T02:13:32.921000&quot;, &quot;deviceId&quot;: &quot;864546030109091&quot;, &quot;path&quot;: [{ &quot;lnglat&quot;: [116.48976,39.98547] }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/tripList",
    "title": "获得所有行程信息",
    "name": "tripList",
    "group": "web",
    "version": "1.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 0 用户导航数据 1 手机系统事件计算的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>[$gt] 查询开始行程开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etm",
            "description": "<p>[$gt] 查询结束行程开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每一页获取的条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数 从0开始</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;total&quot;: 7, &quot;data&quot;: [ { &quot;_id&quot;: &quot;5b3372650624b80005ba0e4b&quot;, &quot;deviceId&quot;: &quot;864546030109091&quot;, &quot;source&quot;: 0, &quot;time&quot;: &quot;2018-06-27T11:17:56.753000&quot; }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controllerV1_1.py",
    "groupTitle": "web"
  },
  {
    "type": "GET",
    "url": "apis/v1/backend/summary/tripList",
    "title": "获得所有行程信息",
    "name": "tripList",
    "group": "web",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>来源 0 用户导航数据 1 手机系统事件计算的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stm",
            "description": "<p>[$gt] 查询开始行程开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etm",
            "description": "<p>[$gt] 查询结束行程开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每一页获取的条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数 从0开始</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "40000"
            ],
            "optional": false,
            "field": "errcode",
            "description": "<p>错误码[0:成功,1:错误]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>{ &quot;total&quot;: 7, &quot;data&quot;: [ { &quot;_id&quot;: &quot;5b3372650624b80005ba0e4b&quot;, &quot;deviceId&quot;: &quot;864546030109091&quot;, &quot;source&quot;: 0, &quot;time&quot;: &quot;2018-06-27T11:17:56.753000&quot; }] }</p>"
          }
        ]
      }
    },
    "filename": "src/jtb_data_web/controller.py",
    "groupTitle": "web"
  }
] });
