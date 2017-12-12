webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = (function () {
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.getAllBookings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/booking')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookingService.prototype.showBooking = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/booking/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookingService.prototype.saveBooking = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/booking', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookingService.prototype.updateBooking = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/booking/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookingService.prototype.deleteBooking = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/booking/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BookingService);
    return BookingService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyService = (function () {
    function DailyService(http) {
        this.http = http;
    }
    DailyService.prototype.getAllDailys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/daily')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DailyService.prototype.showDaily = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/daily/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DailyService.prototype.saveDaily = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/daily', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DailyService.prototype.updateDaily = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/daily/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DailyService.prototype.deleteDaily = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/daily/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DailyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DailyService);
    return DailyService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/daily.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestService = (function () {
    function GuestService(http) {
        this.http = http;
    }
    GuestService.prototype.getAllGuests = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/guest')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    GuestService.prototype.showGuest = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/guest/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    GuestService.prototype.saveGuest = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/guest', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    GuestService.prototype.updateGuest = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/guest/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    GuestService.prototype.deleteGuest = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/guest/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    GuestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GuestService);
    return GuestService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/guest.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthlyService = (function () {
    function MonthlyService(http) {
        this.http = http;
    }
    MonthlyService.prototype.getAllMonthlys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/monthly')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MonthlyService.prototype.showMonthly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/monthly/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MonthlyService.prototype.saveMonthly = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/monthly', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MonthlyService.prototype.updateMonthly = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/monthly/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MonthlyService.prototype.deleteMonthly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/monthly/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MonthlyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MonthlyService);
    return MonthlyService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/monthly.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomstatusreportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomstatusreportService = (function () {
    function RoomstatusreportService(http) {
        this.http = http;
    }
    RoomstatusreportService.prototype.getAllStatuss = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/status')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoomstatusreportService.prototype.showStatus = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/status/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoomstatusreportService.prototype.saveStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/status', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoomstatusreportService.prototype.updateStatus = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/status/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoomstatusreportService.prototype.deleteStatus = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/status/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoomstatusreportService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RoomstatusreportService);
    return RoomstatusreportService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomstatusreport.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getAllSchedules = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/schedule')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ScheduleService.prototype.showSchedule = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/schedule/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ScheduleService.prototype.saveSchedule = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/schedule', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ScheduleService.prototype.updateSchedule = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/schedule/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ScheduleService.prototype.deleteSchedule = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/Schedule/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ScheduleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ScheduleService);
    return ScheduleService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.getAllStaff = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/staff')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StaffService.prototype.showStaff = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/staff/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StaffService.prototype.saveStaff = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/staff', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StaffService.prototype.updateStaff = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/staff/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StaffService.prototype.deleteStaff = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/staff/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StaffService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], StaffService);
    return StaffService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeeklyService = (function () {
    function WeeklyService(http) {
        this.http = http;
    }
    WeeklyService.prototype.getAllWeeklys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/weekly')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WeeklyService.prototype.showWeekly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/weekly/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WeeklyService.prototype.saveWeekly = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/weekly', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WeeklyService.prototype.updateWeekly = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/weekly/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WeeklyService.prototype.deleteWeekly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/weekly/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WeeklyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], WeeklyService);
    return WeeklyService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/weekly.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YearlyService = (function () {
    function YearlyService(http) {
        this.http = http;
    }
    YearlyService.prototype.getAllYearlys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/yearly')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    YearlyService.prototype.showYearly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/yearly/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    YearlyService.prototype.saveYearly = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/yearly', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    YearlyService.prototype.updateYearly = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/yearly/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    YearlyService.prototype.deleteYearly = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/yearly/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    YearlyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], YearlyService);
    return YearlyService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/yearly.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousekeepingreportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HousekeepingreportService = (function () {
    function HousekeepingreportService(http) {
        this.http = http;
    }
    HousekeepingreportService.prototype.getAllHousekeepings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/housekeeping')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousekeepingreportService.prototype.showHousekeeping = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/housekeeping/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousekeepingreportService.prototype.saveHousekeeping = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/housekeeping', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousekeepingreportService.prototype.updateHousekeeping = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/housekeeping/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousekeepingreportService.prototype.deleteHousekeeping = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/housekeeping/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousekeepingreportService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HousekeepingreportService);
    return HousekeepingreportService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/housekeepingreport.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingCreateComponent = (function () {
    function BookingCreateComponent(bookingService, router) {
        this.bookingService = bookingService;
        this.router = router;
        this.booking = {};
    }
    BookingCreateComponent.prototype.ngOnInit = function () {
    };
    BookingCreateComponent.prototype.saveBooking = function () {
        var _this = this;
        this.bookingService.saveBooking(this.booking).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/booking-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookingCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-booking-create',
            template: __webpack_require__(763),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookingCreateComponent);
    return BookingCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-create.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingDetailComponent = (function () {
    function BookingDetailComponent(router, route, bookingService) {
        this.router = router;
        this.route = route;
        this.bookingService = bookingService;
        this.booking = {};
    }
    BookingDetailComponent.prototype.ngOnInit = function () {
        this.getBookingDetail(this.route.snapshot.params['id']);
    };
    BookingDetailComponent.prototype.getBookingDetail = function (id) {
        var _this = this;
        this.bookingService.showBooking(id).then(function (res) {
            _this.booking = res;
            console.log(_this.booking);
        }, function (err) {
            console.log(err);
        });
    };
    BookingDetailComponent.prototype.deleteBooking = function (id) {
        var _this = this;
        this.bookingService.deleteBooking(id).then(function (result) {
            _this.router.navigate(['/bookings']);
        }, function (err) {
            console.log(err);
        });
    };
    BookingDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-booking-detail',
            template: __webpack_require__(764),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _c) || Object])
    ], BookingDetailComponent);
    return BookingDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-detail.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingEditComponent = (function () {
    function BookingEditComponent(bookingService, router, route) {
        this.bookingService = bookingService;
        this.router = router;
        this.route = route;
        this.booking = {};
    }
    BookingEditComponent.prototype.ngOnInit = function () {
        this.getBooking(this.route.snapshot.params['id']);
    };
    BookingEditComponent.prototype.getBooking = function (id) {
        var _this = this;
        this.bookingService.showBooking(id).then(function (res) {
            _this.booking = res;
            console.log(_this.booking);
        }, function (err) {
            console.log(err);
        });
    };
    BookingEditComponent.prototype.updateBooking = function (id) {
        var _this = this;
        this.bookingService.updateBooking(id, this.booking).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/booking-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookingEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-booking-edit',
            template: __webpack_require__(765),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookingEditComponent);
    return BookingEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-edit.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingComponent = (function () {
    function BookingComponent(bookingService) {
        this.bookingService = bookingService;
    }
    BookingComponent.prototype.ngOnInit = function () {
        this.getBookingList();
    };
    BookingComponent.prototype.getBookingList = function () {
        var _this = this;
        this.bookingService.getAllBookings().then(function (res) {
            _this.bookings = res;
        }, function (err) {
            console.log(err);
        });
    };
    BookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-booking',
            template: __webpack_require__(766),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyCreateComponent = (function () {
    function DailyCreateComponent(dailyService, router) {
        this.dailyService = dailyService;
        this.router = router;
        this.daily = {};
    }
    DailyCreateComponent.prototype.ngOnInit = function () {
    };
    DailyCreateComponent.prototype.saveDaily = function () {
        var _this = this;
        this.dailyService.saveDaily(this.daily).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/daily-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    DailyCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-daily-create',
            template: __webpack_require__(767),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DailyCreateComponent);
    return DailyCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/daily-create.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyDetailComponent = (function () {
    function DailyDetailComponent(router, route, dailyService) {
        this.router = router;
        this.route = route;
        this.dailyService = dailyService;
        this.daily = {};
    }
    DailyDetailComponent.prototype.ngOnInit = function () {
        this.getDailyDetail(this.route.snapshot.params['id']);
    };
    DailyDetailComponent.prototype.getDailyDetail = function (id) {
        var _this = this;
        this.dailyService.showDaily(id).then(function (res) {
            _this.daily = res;
            console.log(_this.daily);
        }, function (err) {
            console.log(err);
        });
    };
    DailyDetailComponent.prototype.deleteDaily = function (id) {
        var _this = this;
        this.dailyService.deleteDaily(id).then(function (result) {
            _this.router.navigate(['/dailys']);
        }, function (err) {
            console.log(err);
        });
    };
    DailyDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-daily-detail',
            template: __webpack_require__(768),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */]) === 'function' && _c) || Object])
    ], DailyDetailComponent);
    return DailyDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/daily-detail.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyEditComponent = (function () {
    function DailyEditComponent(dailyService, router, route) {
        this.dailyService = dailyService;
        this.router = router;
        this.route = route;
        this.daily = {};
    }
    DailyEditComponent.prototype.ngOnInit = function () {
        this.getDaily(this.route.snapshot.params['id']);
    };
    DailyEditComponent.prototype.getDaily = function (id) {
        var _this = this;
        this.dailyService.showDaily(id).then(function (res) {
            _this.daily = res;
            console.log(_this.daily);
        }, function (err) {
            console.log(err);
        });
    };
    DailyEditComponent.prototype.updateDaily = function (id) {
        var _this = this;
        this.dailyService.updateDaily(id, this.daily).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/daily-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    DailyEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-daily-edit',
            template: __webpack_require__(769),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], DailyEditComponent);
    return DailyEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/daily-edit.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__daily_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DailyComponent = (function () {
    function DailyComponent(dailyService) {
        this.dailyService = dailyService;
    }
    DailyComponent.prototype.ngOnInit = function () {
        this.getDailyList();
    };
    DailyComponent.prototype.getDailyList = function () {
        var _this = this;
        this.dailyService.getAllDailys().then(function (res) {
            _this.dailys = res;
        }, function (err) {
            console.log(err);
        });
    };
    DailyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-daily',
            template: __webpack_require__(770),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__daily_service__["a" /* DailyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__daily_service__["a" /* DailyService */]) === 'function' && _a) || Object])
    ], DailyComponent);
    return DailyComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/daily.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestsinroomreportCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestsinroomreportCreateComponent = (function () {
    function GuestsinroomreportCreateComponent(guestService, router) {
        this.guestService = guestService;
        this.router = router;
        this.guest = {};
    }
    GuestsinroomreportCreateComponent.prototype.ngOnInit = function () {
    };
    GuestsinroomreportCreateComponent.prototype.saveGuest = function () {
        var _this = this;
        this.guestService.saveGuest(this.guest).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/guest-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-guestsinroomreport-create',
            template: __webpack_require__(771),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__guest_service__["a" /* GuestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__guest_service__["a" /* GuestService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], GuestsinroomreportCreateComponent);
    return GuestsinroomreportCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/guestsinroomreport-create.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_guest_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestsinroomreportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestsinroomreportDetailComponent = (function () {
    function GuestsinroomreportDetailComponent(router, route, guestService) {
        this.router = router;
        this.route = route;
        this.guestService = guestService;
        this.guest = {};
    }
    GuestsinroomreportDetailComponent.prototype.ngOnInit = function () {
        this.getGuestDetail(this.route.snapshot.params['id']);
    };
    GuestsinroomreportDetailComponent.prototype.getGuestDetail = function (id) {
        var _this = this;
        this.guestService.showGuest(id).then(function (res) {
            _this.guest = res;
            console.log(_this.guest);
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportDetailComponent.prototype.deleteGuest = function (id) {
        var _this = this;
        this.guestService.deleteGuest(id).then(function (result) {
            _this.router.navigate(['/guests']);
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-guestsinroomreport-detail',
            template: __webpack_require__(772),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_guest_service__["a" /* GuestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_guest_service__["a" /* GuestService */]) === 'function' && _c) || Object])
    ], GuestsinroomreportDetailComponent);
    return GuestsinroomreportDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/guestsinroomreport-detail.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_guest_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestsinroomreportEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestsinroomreportEditComponent = (function () {
    function GuestsinroomreportEditComponent(guestService, router, route) {
        this.guestService = guestService;
        this.router = router;
        this.route = route;
        this.guest = {};
    }
    GuestsinroomreportEditComponent.prototype.ngOnInit = function () {
        this.getGuest(this.route.snapshot.params['id']);
    };
    GuestsinroomreportEditComponent.prototype.getGuest = function (id) {
        var _this = this;
        this.guestService.showGuest(id).then(function (res) {
            _this.guest = res;
            console.log(_this.guest);
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportEditComponent.prototype.updateGuest = function (id) {
        var _this = this;
        this.guestService.updateGuest(id, this.guest).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/guest-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-guestsinroomreport-edit',
            template: __webpack_require__(773),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_guest_service__["a" /* GuestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_guest_service__["a" /* GuestService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], GuestsinroomreportEditComponent);
    return GuestsinroomreportEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/guestsinroomreport-edit.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guest_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestsinroomreportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuestsinroomreportComponent = (function () {
    function GuestsinroomreportComponent(guestService) {
        this.guestService = guestService;
    }
    GuestsinroomreportComponent.prototype.ngOnInit = function () {
        this.getGuestList();
    };
    GuestsinroomreportComponent.prototype.getGuestList = function () {
        var _this = this;
        this.guestService.getAllGuests().then(function (res) {
            _this.guests = res;
        }, function (err) {
            console.log(err);
        });
    };
    GuestsinroomreportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-guestsinroomreport',
            template: __webpack_require__(774),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__guest_service__["a" /* GuestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__guest_service__["a" /* GuestService */]) === 'function' && _a) || Object])
    ], GuestsinroomreportComponent);
    return GuestsinroomreportComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/guestsinroomreport.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(775),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/home.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousekeepingreportCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HousekeepingreportCreateComponent = (function () {
    function HousekeepingreportCreateComponent(housekeepingService, router) {
        this.housekeepingService = housekeepingService;
        this.router = router;
        this.housekeeping = {};
    }
    HousekeepingreportCreateComponent.prototype.ngOnInit = function () {
    };
    HousekeepingreportCreateComponent.prototype.saveHousekeeping = function () {
        var _this = this;
        this.housekeepingService.saveHousekeeping(this.housekeeping).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/housekeeping-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    HousekeepingreportCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-housekeepingreport-create',
            template: __webpack_require__(776),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__["a" /* HousekeepingreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__["a" /* HousekeepingreportService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HousekeepingreportCreateComponent);
    return HousekeepingreportCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/housekeepingreport-create.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousekeepingreportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HousekeepingreportDetailComponent = (function () {
    function HousekeepingreportDetailComponent() {
    }
    HousekeepingreportDetailComponent.prototype.ngOnInit = function () {
    };
    HousekeepingreportDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-housekeepingreport-detail',
            template: __webpack_require__(777),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], HousekeepingreportDetailComponent);
    return HousekeepingreportDetailComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/housekeepingreport-detail.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_housekeepingreport_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousekeepingreportEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HousekeepingreportEditComponent = (function () {
    function HousekeepingreportEditComponent(housekeepingService, router, route) {
        this.housekeepingService = housekeepingService;
        this.router = router;
        this.route = route;
        this.housekeeping = {};
    }
    HousekeepingreportEditComponent.prototype.ngOnInit = function () {
        this.getHousekeeping(this.route.snapshot.params['id']);
    };
    HousekeepingreportEditComponent.prototype.getHousekeeping = function (id) {
        var _this = this;
        this.housekeepingService.showHousekeeping(id).then(function (res) {
            _this.housekeeping = res;
            console.log(_this.housekeeping);
        }, function (err) {
            console.log(err);
        });
    };
    HousekeepingreportEditComponent.prototype.updateHousekeeping = function (id) {
        var _this = this;
        this.housekeepingService.updateHousekeeping(id, this.housekeeping).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/housekeeping-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    HousekeepingreportEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-housekeepingreport-edit',
            template: __webpack_require__(778),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_housekeepingreport_service__["a" /* HousekeepingreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_housekeepingreport_service__["a" /* HousekeepingreportService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], HousekeepingreportEditComponent);
    return HousekeepingreportEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/housekeepingreport-edit.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousekeepingreportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousekeepingreportComponent = (function () {
    function HousekeepingreportComponent(housekeepingService) {
        this.housekeepingService = housekeepingService;
    }
    HousekeepingreportComponent.prototype.ngOnInit = function () {
        this.getHousekeepingList();
    };
    HousekeepingreportComponent.prototype.getHousekeepingList = function () {
        var _this = this;
        this.housekeepingService.getAllHousekeepings().then(function (res) {
            _this.housekeepings = res;
        }, function (err) {
            console.log(err);
        });
    };
    HousekeepingreportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-housekeepingreport',
            template: __webpack_require__(779),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__["a" /* HousekeepingreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_housekeepingreport_service__["a" /* HousekeepingreportService */]) === 'function' && _a) || Object])
    ], HousekeepingreportComponent);
    return HousekeepingreportComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/housekeepingreport.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthlyCreateComponent = (function () {
    function MonthlyCreateComponent(monthlyService, router) {
        this.monthlyService = monthlyService;
        this.router = router;
        this.monthly = {};
    }
    MonthlyCreateComponent.prototype.ngOnInit = function () {
    };
    MonthlyCreateComponent.prototype.saveMonthly = function () {
        var _this = this;
        this.monthlyService.saveMonthly(this.monthly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/monthly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-monthly-create',
            template: __webpack_require__(780),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MonthlyCreateComponent);
    return MonthlyCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/monthly-create.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthlyDetailComponent = (function () {
    function MonthlyDetailComponent(router, route, monthlyService) {
        this.router = router;
        this.route = route;
        this.monthlyService = monthlyService;
        this.monthly = {};
    }
    MonthlyDetailComponent.prototype.ngOnInit = function () {
        this.getMonthlyDetail(this.route.snapshot.params['id']);
    };
    MonthlyDetailComponent.prototype.getMonthlyDetail = function (id) {
        var _this = this;
        this.monthlyService.showMonthly(id).then(function (res) {
            _this.monthly = res;
            console.log(_this.monthly);
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyDetailComponent.prototype.deleteMonthly = function (id) {
        var _this = this;
        this.monthlyService.deleteMonthly(id).then(function (result) {
            _this.router.navigate(['/monthlys']);
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-monthly-detail',
            template: __webpack_require__(781),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */]) === 'function' && _c) || Object])
    ], MonthlyDetailComponent);
    return MonthlyDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/monthly-detail.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthlyEditComponent = (function () {
    function MonthlyEditComponent(monthlyService, router, route) {
        this.monthlyService = monthlyService;
        this.router = router;
        this.route = route;
        this.monthly = {};
    }
    MonthlyEditComponent.prototype.ngOnInit = function () {
        this.getMonthly(this.route.snapshot.params['id']);
    };
    MonthlyEditComponent.prototype.getMonthly = function (id) {
        var _this = this;
        this.monthlyService.showMonthly(id).then(function (res) {
            _this.monthly = res;
            console.log(_this.monthly);
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyEditComponent.prototype.updateMonthly = function (id) {
        var _this = this;
        this.monthlyService.updateMonthly(id, this.monthly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/monthly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-monthly-edit',
            template: __webpack_require__(782),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], MonthlyEditComponent);
    return MonthlyEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/monthly-edit.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonthlyComponent = (function () {
    function MonthlyComponent(monthlyService) {
        this.monthlyService = monthlyService;
    }
    MonthlyComponent.prototype.ngOnInit = function () {
        this.getMonthlyList();
    };
    MonthlyComponent.prototype.getMonthlyList = function () {
        var _this = this;
        this.monthlyService.getAllMonthlys().then(function (res) {
            _this.monthlys = res;
        }, function (err) {
            console.log(err);
        });
    };
    MonthlyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-monthly',
            template: __webpack_require__(783),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_monthly_service__["a" /* MonthlyService */]) === 'function' && _a) || Object])
    ], MonthlyComponent);
    return MonthlyComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/monthly.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__(784),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsComponent);
    return ReportsComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/reports.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomoccupancyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomoccupancyComponent = (function () {
    function RoomoccupancyComponent() {
    }
    RoomoccupancyComponent.prototype.ngOnInit = function () {
    };
    RoomoccupancyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomoccupancy',
            template: __webpack_require__(785),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], RoomoccupancyComponent);
    return RoomoccupancyComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomoccupancy.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomstatusreportCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomstatusreportCreateComponent = (function () {
    function RoomstatusreportCreateComponent(statusService, router) {
        this.statusService = statusService;
        this.router = router;
        this.status = {};
    }
    RoomstatusreportCreateComponent.prototype.ngOnInit = function () {
    };
    RoomstatusreportCreateComponent.prototype.saveStatus = function () {
        var _this = this;
        this.statusService.saveStatus(this.status).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/status-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomstatusreport-create',
            template: __webpack_require__(786),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RoomstatusreportCreateComponent);
    return RoomstatusreportCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomstatusreport-create.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomstatusreportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomstatusreportDetailComponent = (function () {
    function RoomstatusreportDetailComponent(router, route, statusService) {
        this.router = router;
        this.route = route;
        this.statusService = statusService;
        this.status = {};
    }
    RoomstatusreportDetailComponent.prototype.ngOnInit = function () {
        this.getStatusDetail(this.route.snapshot.params['id']);
    };
    RoomstatusreportDetailComponent.prototype.getStatusDetail = function (id) {
        var _this = this;
        this.statusService.showStatus(id).then(function (res) {
            _this.status = res;
            console.log(_this.status);
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportDetailComponent.prototype.deleteStatus = function (id) {
        var _this = this;
        this.statusService.deleteStatus(id).then(function (result) {
            _this.router.navigate(['/statuss']);
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomstatusreport-detail',
            template: __webpack_require__(787),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */]) === 'function' && _c) || Object])
    ], RoomstatusreportDetailComponent);
    return RoomstatusreportDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomstatusreport-detail.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomstatusreportEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomstatusreportEditComponent = (function () {
    function RoomstatusreportEditComponent(statusService, router, route) {
        this.statusService = statusService;
        this.router = router;
        this.route = route;
        this.status = {};
    }
    RoomstatusreportEditComponent.prototype.ngOnInit = function () {
        this.getStatus(this.route.snapshot.params['id']);
    };
    RoomstatusreportEditComponent.prototype.getStatus = function (id) {
        var _this = this;
        this.statusService.showStatus(id).then(function (res) {
            _this.status = res;
            console.log(_this.status);
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportEditComponent.prototype.updateStatus = function (id) {
        var _this = this;
        this.statusService.updateStatus(id, this.status).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/status-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomstatusreport-edit',
            template: __webpack_require__(788),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], RoomstatusreportEditComponent);
    return RoomstatusreportEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomstatusreport-edit.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomstatusreportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomstatusreportComponent = (function () {
    function RoomstatusreportComponent(statusService) {
        this.statusService = statusService;
    }
    RoomstatusreportComponent.prototype.ngOnInit = function () {
        this.getStatusList();
    };
    RoomstatusreportComponent.prototype.getStatusList = function () {
        var _this = this;
        this.statusService.getAllStatuss().then(function (res) {
            _this.statuses = res;
        }, function (err) {
            console.log(err);
        });
    };
    RoomstatusreportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomstatusreport',
            template: __webpack_require__(789),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_roomstatusreport_service__["a" /* RoomstatusreportService */]) === 'function' && _a) || Object])
    ], RoomstatusreportComponent);
    return RoomstatusreportComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/roomstatusreport.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleCreateComponent = (function () {
    function ScheduleCreateComponent(scheduleService, router) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.schedule = {};
    }
    ScheduleCreateComponent.prototype.ngOnInit = function () {
    };
    ScheduleCreateComponent.prototype.saveSchedule = function () {
        var _this = this;
        this.scheduleService.saveSchedule(this.schedule).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/schedule-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-schedule-create',
            template: __webpack_require__(790),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ScheduleCreateComponent);
    return ScheduleCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-create.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleDetailComponent = (function () {
    function ScheduleDetailComponent(router, route, scheduleService) {
        this.router = router;
        this.route = route;
        this.scheduleService = scheduleService;
        this.schedule = {};
    }
    ScheduleDetailComponent.prototype.ngOnInit = function () {
        this.getScheduleDetail(this.route.snapshot.params['id']);
    };
    ScheduleDetailComponent.prototype.getScheduleDetail = function (id) {
        var _this = this;
        this.scheduleService.showSchedule(id).then(function (res) {
            _this.schedule = res;
            console.log(_this.schedule);
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleDetailComponent.prototype.deleteSchedule = function (id) {
        var _this = this;
        this.scheduleService.deleteSchedule(id).then(function (result) {
            _this.router.navigate(['/schedules']);
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-schedule-detail',
            template: __webpack_require__(791),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _c) || Object])
    ], ScheduleDetailComponent);
    return ScheduleDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-detail.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleEditComponent = (function () {
    function ScheduleEditComponent(scheduleService, router, route) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.route = route;
        this.schedule = {};
    }
    ScheduleEditComponent.prototype.ngOnInit = function () {
        this.getSchedule(this.route.snapshot.params['id']);
    };
    ScheduleEditComponent.prototype.getSchedule = function (id) {
        var _this = this;
        this.scheduleService.showSchedule(id).then(function (res) {
            _this.schedule = res;
            console.log(_this.schedule);
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleEditComponent.prototype.updateSchedule = function (id) {
        var _this = this;
        this.scheduleService.updateSchedule(id, this.schedule).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/schedule-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-schedule-edit',
            template: __webpack_require__(792),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ScheduleEditComponent);
    return ScheduleEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-edit.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = (function () {
    function ScheduleComponent(scheduleService) {
        this.scheduleService = scheduleService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getScheduleList();
    };
    ScheduleComponent.prototype.getScheduleList = function () {
        var _this = this;
        this.scheduleService.getAllSchedules().then(function (res) {
            _this.schedules = res;
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-schedule',
            template: __webpack_require__(793),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffCreateComponent = (function () {
    function StaffCreateComponent(staffService, router) {
        this.staffService = staffService;
        this.router = router;
        this.staff = {};
    }
    StaffCreateComponent.prototype.ngOnInit = function () {
    };
    StaffCreateComponent.prototype.saveStaff = function () {
        var _this = this;
        this.staffService.saveStaff(this.staff).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/staff-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    StaffCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-staff-create',
            template: __webpack_require__(794),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], StaffCreateComponent);
    return StaffCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-create.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffDetailComponent = (function () {
    function StaffDetailComponent(route, staffService, router) {
        this.route = route;
        this.staffService = staffService;
        this.router = router;
        this.staff = {};
    }
    StaffDetailComponent.prototype.ngOnInit = function () {
        this.getStaffDetail(this.route.snapshot.params['id']);
    };
    StaffDetailComponent.prototype.getStaffDetail = function (id) {
        var _this = this;
        this.staffService.showStaff(id).then(function (res) {
            _this.staff = res;
            console.log(_this.staff);
        }, function (err) {
            console.log(err);
        });
    };
    StaffDetailComponent.prototype.deleteStaff = function (id) {
        var _this = this;
        this.staffService.deleteStaff(id).then(function (result) {
            _this.router.navigate(['/staffs']);
        }, function (err) {
            console.log(err);
        });
    };
    StaffDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-staff-detail',
            template: __webpack_require__(795),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], StaffDetailComponent);
    return StaffDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-detail.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffEditComponent = (function () {
    function StaffEditComponent(staffService, router, route) {
        this.staffService = staffService;
        this.router = router;
        this.route = route;
        this.staff = {};
    }
    StaffEditComponent.prototype.ngOnInit = function () {
        this.getStaff(this.route.snapshot.params['id']);
    };
    StaffEditComponent.prototype.getStaff = function (id) {
        var _this = this;
        this.staffService.showStaff(id).then(function (res) {
            _this.staff = res;
            console.log(_this.staff);
        }, function (err) {
            console.log(err);
        });
    };
    StaffEditComponent.prototype.updateStaffS = function (id) {
        var _this = this;
        this.staffService.updateStaff(id, this.staff).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/staff-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    StaffEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-staff-edit',
            template: __webpack_require__(796),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], StaffEditComponent);
    return StaffEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-edit.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffComponent = (function () {
    function StaffComponent(staffService) {
        this.staffService = staffService;
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.getStaffList();
    };
    StaffComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffService.getAllStaff().then(function (res) {
            _this.staffs = res;
        }, function (err) {
            console.log(err);
        });
    };
    StaffComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-staff',
            template: __webpack_require__(797),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object])
    ], StaffComponent);
    return StaffComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeeklyCreateComponent = (function () {
    function WeeklyCreateComponent(weeklyService) {
        this.weeklyService = weeklyService;
    }
    WeeklyCreateComponent.prototype.ngOnInit = function () {
        this.getWeeklyList();
    };
    WeeklyCreateComponent.prototype.getWeeklyList = function () {
        var _this = this;
        this.weeklyService.getAllWeeklys().then(function (res) {
            _this.weeklys = res;
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-weekly-create',
            template: __webpack_require__(798),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */]) === 'function' && _a) || Object])
    ], WeeklyCreateComponent);
    return WeeklyCreateComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/weekly-create.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_weekly_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeeklyDetailComponent = (function () {
    function WeeklyDetailComponent(router, route, weeklyService) {
        this.router = router;
        this.route = route;
        this.weeklyService = weeklyService;
        this.weekly = {};
    }
    WeeklyDetailComponent.prototype.ngOnInit = function () {
        this.getWeeklyDetail(this.route.snapshot.params['id']);
    };
    WeeklyDetailComponent.prototype.getWeeklyDetail = function (id) {
        var _this = this;
        this.weeklyService.showWeekly(id).then(function (res) {
            _this.weekly = res;
            console.log(_this.weekly);
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyDetailComponent.prototype.deleteWeekly = function (id) {
        var _this = this;
        this.weeklyService.deleteWeekly(id).then(function (result) {
            _this.router.navigate(['/weeklys']);
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-weekly-detail',
            template: __webpack_require__(799),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_weekly_service__["a" /* WeeklyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_weekly_service__["a" /* WeeklyService */]) === 'function' && _c) || Object])
    ], WeeklyDetailComponent);
    return WeeklyDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/weekly-detail.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeeklyEditComponent = (function () {
    function WeeklyEditComponent(weeklyService, router, route) {
        this.weeklyService = weeklyService;
        this.router = router;
        this.route = route;
        this.weekly = {};
    }
    WeeklyEditComponent.prototype.ngOnInit = function () {
        this.getWeekly(this.route.snapshot.params['id']);
    };
    WeeklyEditComponent.prototype.getWeekly = function (id) {
        var _this = this;
        this.weeklyService.showWeekly(id).then(function (res) {
            _this.weekly = res;
            console.log(_this.weekly);
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyEditComponent.prototype.updateWeekly = function (id) {
        var _this = this;
        this.weeklyService.updateWeekly(id, this.weekly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/weekly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-weekly-edit',
            template: __webpack_require__(800),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], WeeklyEditComponent);
    return WeeklyEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/weekly-edit.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeeklyComponent = (function () {
    function WeeklyComponent(weeklyService, router) {
        this.weeklyService = weeklyService;
        this.router = router;
        this.weekly = {};
    }
    WeeklyComponent.prototype.ngOnInit = function () {
    };
    WeeklyComponent.prototype.saveWeekly = function () {
        var _this = this;
        this.weeklyService.saveWeekly(this.weekly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/weekly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    WeeklyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-weekly',
            template: __webpack_require__(801),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_weekly_service__["a" /* WeeklyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], WeeklyComponent);
    return WeeklyComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/weekly.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YearlyCreateComponent = (function () {
    function YearlyCreateComponent(yearlyService, router) {
        this.yearlyService = yearlyService;
        this.router = router;
        this.yearly = {};
    }
    YearlyCreateComponent.prototype.ngOnInit = function () {
    };
    YearlyCreateComponent.prototype.saveYearly = function () {
        var _this = this;
        this.yearlyService.saveYearly(this.yearly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/yearly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    YearlyCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-yearly-create',
            template: __webpack_require__(802),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], YearlyCreateComponent);
    return YearlyCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/yearly-create.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_yearly_service__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YearlyDetailComponent = (function () {
    function YearlyDetailComponent(router, route, yearlyService) {
        this.router = router;
        this.route = route;
        this.yearlyService = yearlyService;
        this.yearly = {};
    }
    YearlyDetailComponent.prototype.ngOnInit = function () {
        this.getYearlyDetail(this.route.snapshot.params['id']);
    };
    YearlyDetailComponent.prototype.getYearlyDetail = function (id) {
        var _this = this;
        this.yearlyService.showYearly(id).then(function (res) {
            _this.yearly = res;
            console.log(_this.yearly);
        }, function (err) {
            console.log(err);
        });
    };
    YearlyDetailComponent.prototype.deleteYearly = function (id) {
        var _this = this;
        this.yearlyService.deleteYearly(id).then(function (result) {
            _this.router.navigate(['/yearlys']);
        }, function (err) {
            console.log(err);
        });
    };
    YearlyDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-yearly-detail',
            template: __webpack_require__(803),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_yearly_service__["a" /* YearlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_yearly_service__["a" /* YearlyService */]) === 'function' && _c) || Object])
    ], YearlyDetailComponent);
    return YearlyDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/yearly-detail.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YearlyEditComponent = (function () {
    function YearlyEditComponent(yearlyService, router, route) {
        this.yearlyService = yearlyService;
        this.router = router;
        this.route = route;
        this.yearly = {};
    }
    YearlyEditComponent.prototype.ngOnInit = function () {
        this.getYearly(this.route.snapshot.params['id']);
    };
    YearlyEditComponent.prototype.getYearly = function (id) {
        var _this = this;
        this.yearlyService.showYearly(id).then(function (res) {
            _this.yearly = res;
            console.log(_this.yearly);
        }, function (err) {
            console.log(err);
        });
    };
    YearlyEditComponent.prototype.updateYearly = function (id) {
        var _this = this;
        this.yearlyService.updateYearly(id, this.yearly).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/yearly-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    YearlyEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-yearly-edit',
            template: __webpack_require__(804),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], YearlyEditComponent);
    return YearlyEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/yearly-edit.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YearlyComponent = (function () {
    function YearlyComponent(yearlyService) {
        this.yearlyService = yearlyService;
    }
    YearlyComponent.prototype.ngOnInit = function () {
        this.getYearlyList();
    };
    YearlyComponent.prototype.getYearlyList = function () {
        var _this = this;
        this.yearlyService.getAllYearlys().then(function (res) {
            _this.yearlys = res;
        }, function (err) {
            console.log(err);
        });
    };
    YearlyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-yearly',
            template: __webpack_require__(805),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_yearly_service__["a" /* YearlyService */]) === 'function' && _a) || Object])
    ], YearlyComponent);
    return YearlyComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/yearly.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 442;


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(561);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(762),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__staff_staff_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_detail_staff_detail_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_create_staff_create_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_edit_staff_edit_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_booking_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__booking_booking_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__booking_detail_booking_detail_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__booking_create_booking_create_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__booking_edit_booking_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__schedule_detail_schedule_detail_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_create_schedule_create_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__schedule_edit_schedule_edit_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_schedule_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reports_reports_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__housekeepingreport_housekeepingreport_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__housekeepingreport_create_housekeepingreport_create_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__housekeepingreport_detail_housekeepingreport_detail_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__housekeepingreport_edit_housekeepingreport_edit_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guestsinroomreport_guestsinroomreport_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__guestsinroomreport_create_guestsinroomreport_create_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guestsinroomreport_edit_guestsinroomreport_edit_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guestsinroomreport_detail_guestsinroomreport_detail_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__roomstatusreport_roomstatusreport_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__roomstatusreport_create_roomstatusreport_create_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__roomstatusreport_edit_roomstatusreport_edit_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__roomstatusreport_detail_roomstatusreport_detail_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__daily_daily_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__weekly_weekly_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__monthly_monthly_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__yearly_yearly_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__daily_create_daily_create_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__daily_edit_daily_edit_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__daily_detail_daily_detail_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__weekly_create_weekly_create_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__weekly_edit_weekly_edit_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__weekly_detail_weekly_detail_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__monthly_create_monthly_create_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__monthly_edit_monthly_edit_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__monthly_detail_monthly_detail_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__yearly_create_yearly_create_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__yearly_edit_yearly_edit_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__yearly_detail_yearly_detail_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_app_daily_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_app_guest_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_app_housekeepingreport_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_app_monthly_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_app_roomstatusreport_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_app_weekly_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_app_yearly_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__roomoccupancy_roomoccupancy_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__staff_staff_component__["a" /* StaffComponent */],
                __WEBPACK_IMPORTED_MODULE_9__staff_detail_staff_detail_component__["a" /* StaffDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__staff_create_staff_create_component__["a" /* StaffCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__staff_edit_staff_edit_component__["a" /* StaffEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__booking_booking_component__["a" /* BookingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__booking_detail_booking_detail_component__["a" /* BookingDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__booking_create_booking_create_component__["a" /* BookingCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__booking_edit_booking_edit_component__["a" /* BookingEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__schedule_create_schedule_create_component__["a" /* ScheduleCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__schedule_edit_schedule_edit_component__["a" /* ScheduleEditComponent */],
                __WEBPACK_IMPORTED_MODULE_22__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__housekeepingreport_housekeepingreport_component__["a" /* HousekeepingreportComponent */],
                __WEBPACK_IMPORTED_MODULE_25__housekeepingreport_create_housekeepingreport_create_component__["a" /* HousekeepingreportCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_26__housekeepingreport_detail_housekeepingreport_detail_component__["a" /* HousekeepingreportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_27__housekeepingreport_edit_housekeepingreport_edit_component__["a" /* HousekeepingreportEditComponent */],
                __WEBPACK_IMPORTED_MODULE_28__guestsinroomreport_guestsinroomreport_component__["a" /* GuestsinroomreportComponent */],
                __WEBPACK_IMPORTED_MODULE_29__guestsinroomreport_create_guestsinroomreport_create_component__["a" /* GuestsinroomreportCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_30__guestsinroomreport_edit_guestsinroomreport_edit_component__["a" /* GuestsinroomreportEditComponent */],
                __WEBPACK_IMPORTED_MODULE_31__guestsinroomreport_detail_guestsinroomreport_detail_component__["a" /* GuestsinroomreportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_32__roomstatusreport_roomstatusreport_component__["a" /* RoomstatusreportComponent */],
                __WEBPACK_IMPORTED_MODULE_33__roomstatusreport_create_roomstatusreport_create_component__["a" /* RoomstatusreportCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_34__roomstatusreport_edit_roomstatusreport_edit_component__["a" /* RoomstatusreportEditComponent */],
                __WEBPACK_IMPORTED_MODULE_35__roomstatusreport_detail_roomstatusreport_detail_component__["a" /* RoomstatusreportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_36__daily_daily_component__["a" /* DailyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__weekly_weekly_component__["a" /* WeeklyComponent */],
                __WEBPACK_IMPORTED_MODULE_38__monthly_monthly_component__["a" /* MonthlyComponent */],
                __WEBPACK_IMPORTED_MODULE_39__yearly_yearly_component__["a" /* YearlyComponent */],
                __WEBPACK_IMPORTED_MODULE_40__daily_create_daily_create_component__["a" /* DailyCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_41__daily_edit_daily_edit_component__["a" /* DailyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_42__daily_detail_daily_detail_component__["a" /* DailyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_43__weekly_create_weekly_create_component__["a" /* WeeklyCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_44__weekly_edit_weekly_edit_component__["a" /* WeeklyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_45__weekly_detail_weekly_detail_component__["a" /* WeeklyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_46__monthly_create_monthly_create_component__["a" /* MonthlyCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_47__monthly_edit_monthly_edit_component__["a" /* MonthlyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_48__monthly_detail_monthly_detail_component__["a" /* MonthlyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_49__yearly_create_yearly_create_component__["a" /* YearlyCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_50__yearly_edit_yearly_edit_component__["a" /* YearlyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_51__yearly_detail_yearly_detail_component__["a" /* YearlyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_59__roomoccupancy_roomoccupancy_component__["a" /* RoomoccupancyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_app_app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */],
                __WEBPACK_IMPORTED_MODULE_12_app_booking_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_21_app_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_52_app_daily_service__["a" /* DailyService */],
                __WEBPACK_IMPORTED_MODULE_53_app_guest_service__["a" /* GuestService */],
                __WEBPACK_IMPORTED_MODULE_54_app_housekeepingreport_service__["a" /* HousekeepingreportService */],
                __WEBPACK_IMPORTED_MODULE_55_app_monthly_service__["a" /* MonthlyService */],
                __WEBPACK_IMPORTED_MODULE_56_app_roomstatusreport_service__["a" /* RoomstatusreportService */],
                __WEBPACK_IMPORTED_MODULE_57_app_weekly_service__["a" /* WeeklyService */],
                __WEBPACK_IMPORTED_MODULE_58_app_yearly_service__["a" /* YearlyService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_staff_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_staff_create_staff_create_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_staff_detail_staff_detail_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_staff_edit_staff_edit_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_booking_booking_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_booking_detail_booking_detail_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_booking_create_booking_create_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_booking_edit_booking_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_schedule_schedule_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_schedule_detail_schedule_detail_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_schedule_create_schedule_create_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_schedule_edit_schedule_edit_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_reports_reports_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_home_home_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_daily_edit_daily_edit_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_daily_create_daily_create_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_daily_detail_daily_detail_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_daily_daily_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_weekly_weekly_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_weekly_detail_weekly_detail_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_weekly_create_weekly_create_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_weekly_edit_weekly_edit_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_monthly_monthly_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_monthly_detail_monthly_detail_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_monthly_create_monthly_create_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_monthly_edit_monthly_edit_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_yearly_edit_yearly_edit_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_yearly_create_yearly_create_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_yearly_detail_yearly_detail_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_yearly_yearly_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_guestsinroomreport_guestsinroomreport_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_guestsinroomreport_create_guestsinroomreport_create_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_guestsinroomreport_detail_guestsinroomreport_detail_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_guestsinroomreport_edit_guestsinroomreport_edit_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_app_roomstatusreport_roomstatusreport_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_roomstatusreport_detail_roomstatusreport_detail_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_app_roomstatusreport_create_roomstatusreport_create_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_app_roomstatusreport_edit_roomstatusreport_edit_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_housekeepingreport_housekeepingreport_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_app_housekeepingreport_detail_housekeepingreport_detail_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_housekeepingreport_create_housekeepingreport_create_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_app_housekeepingreport_edit_housekeepingreport_edit_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_app_roomoccupancy_roomoccupancy_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });












































var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14_app_home_home_component__["a" /* HomeComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_13_app_reports_reports_component__["a" /* ReportsComponent */] },
    { path: '', redirectTo: 'staffs', pathMatch: 'full' },
    { path: 'staffs', component: __WEBPACK_IMPORTED_MODULE_1__staff_staff_component__["a" /* StaffComponent */] },
    { path: 'staff-details/:id', component: __WEBPACK_IMPORTED_MODULE_3_app_staff_detail_staff_detail_component__["a" /* StaffDetailComponent */] },
    { path: 'staff-create', component: __WEBPACK_IMPORTED_MODULE_2_app_staff_create_staff_create_component__["a" /* StaffCreateComponent */] },
    { path: 'staff-edit/:id', component: __WEBPACK_IMPORTED_MODULE_4_app_staff_edit_staff_edit_component__["a" /* StaffEditComponent */] },
    { path: 'bookings', component: __WEBPACK_IMPORTED_MODULE_5_app_booking_booking_component__["a" /* BookingComponent */] },
    { path: 'booking-details/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_booking_detail_booking_detail_component__["a" /* BookingDetailComponent */] },
    { path: 'booking-create', component: __WEBPACK_IMPORTED_MODULE_7_app_booking_create_booking_create_component__["a" /* BookingCreateComponent */] },
    { path: 'booking-edit/:id', component: __WEBPACK_IMPORTED_MODULE_8_app_booking_edit_booking_edit_component__["a" /* BookingEditComponent */] },
    { path: 'schedules', component: __WEBPACK_IMPORTED_MODULE_9_app_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'schedule-details/:id', component: __WEBPACK_IMPORTED_MODULE_10_app_schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */] },
    { path: 'schedule-create', component: __WEBPACK_IMPORTED_MODULE_11_app_schedule_create_schedule_create_component__["a" /* ScheduleCreateComponent */] },
    { path: 'schedule-edit/:id', component: __WEBPACK_IMPORTED_MODULE_12_app_schedule_edit_schedule_edit_component__["a" /* ScheduleEditComponent */] },
    { path: 'dailys', component: __WEBPACK_IMPORTED_MODULE_18_app_daily_daily_component__["a" /* DailyComponent */] },
    { path: 'daily-details/:id', component: __WEBPACK_IMPORTED_MODULE_17_app_daily_detail_daily_detail_component__["a" /* DailyDetailComponent */] },
    { path: 'daily-create', component: __WEBPACK_IMPORTED_MODULE_16_app_daily_create_daily_create_component__["a" /* DailyCreateComponent */] },
    { path: 'daily-edit/:id', component: __WEBPACK_IMPORTED_MODULE_15_app_daily_edit_daily_edit_component__["a" /* DailyEditComponent */] },
    { path: 'weeklys', component: __WEBPACK_IMPORTED_MODULE_19_app_weekly_weekly_component__["a" /* WeeklyComponent */] },
    { path: 'weekly-details/:id', component: __WEBPACK_IMPORTED_MODULE_20_app_weekly_detail_weekly_detail_component__["a" /* WeeklyDetailComponent */] },
    { path: 'weekly-create', component: __WEBPACK_IMPORTED_MODULE_21_app_weekly_create_weekly_create_component__["a" /* WeeklyCreateComponent */] },
    { path: 'weekly-edit/:id', component: __WEBPACK_IMPORTED_MODULE_22_app_weekly_edit_weekly_edit_component__["a" /* WeeklyEditComponent */] },
    { path: 'monthlys', component: __WEBPACK_IMPORTED_MODULE_23_app_monthly_monthly_component__["a" /* MonthlyComponent */] },
    { path: 'monthly-details/:id', component: __WEBPACK_IMPORTED_MODULE_24_app_monthly_detail_monthly_detail_component__["a" /* MonthlyDetailComponent */] },
    { path: 'monthly-create', component: __WEBPACK_IMPORTED_MODULE_25_app_monthly_create_monthly_create_component__["a" /* MonthlyCreateComponent */] },
    { path: 'monthly-edit/:id', component: __WEBPACK_IMPORTED_MODULE_26_app_monthly_edit_monthly_edit_component__["a" /* MonthlyEditComponent */] },
    { path: 'yearlys', component: __WEBPACK_IMPORTED_MODULE_30_app_yearly_yearly_component__["a" /* YearlyComponent */] },
    { path: 'yearly-details/:id', component: __WEBPACK_IMPORTED_MODULE_29_app_yearly_detail_yearly_detail_component__["a" /* YearlyDetailComponent */] },
    { path: 'yearly-create', component: __WEBPACK_IMPORTED_MODULE_28_app_yearly_create_yearly_create_component__["a" /* YearlyCreateComponent */] },
    { path: 'yearly-edit/:id', component: __WEBPACK_IMPORTED_MODULE_27_app_yearly_edit_yearly_edit_component__["a" /* YearlyEditComponent */] },
    { path: 'guests', component: __WEBPACK_IMPORTED_MODULE_31_app_guestsinroomreport_guestsinroomreport_component__["a" /* GuestsinroomreportComponent */] },
    { path: 'guest-details/:id', component: __WEBPACK_IMPORTED_MODULE_33_app_guestsinroomreport_detail_guestsinroomreport_detail_component__["a" /* GuestsinroomreportDetailComponent */] },
    { path: 'guest-create', component: __WEBPACK_IMPORTED_MODULE_32_app_guestsinroomreport_create_guestsinroomreport_create_component__["a" /* GuestsinroomreportCreateComponent */] },
    { path: 'guest-edit/:id', component: __WEBPACK_IMPORTED_MODULE_34_app_guestsinroomreport_edit_guestsinroomreport_edit_component__["a" /* GuestsinroomreportEditComponent */] },
    { path: 'statuss', component: __WEBPACK_IMPORTED_MODULE_35_app_roomstatusreport_roomstatusreport_component__["a" /* RoomstatusreportComponent */] },
    { path: 'status-details/:id', component: __WEBPACK_IMPORTED_MODULE_36_app_roomstatusreport_detail_roomstatusreport_detail_component__["a" /* RoomstatusreportDetailComponent */] },
    { path: 'status-create', component: __WEBPACK_IMPORTED_MODULE_37_app_roomstatusreport_create_roomstatusreport_create_component__["a" /* RoomstatusreportCreateComponent */] },
    { path: 'status-edit/:id', component: __WEBPACK_IMPORTED_MODULE_38_app_roomstatusreport_edit_roomstatusreport_edit_component__["a" /* RoomstatusreportEditComponent */] },
    { path: 'housekeepings', component: __WEBPACK_IMPORTED_MODULE_39_app_housekeepingreport_housekeepingreport_component__["a" /* HousekeepingreportComponent */] },
    { path: 'housekeeping-details/:id', component: __WEBPACK_IMPORTED_MODULE_40_app_housekeepingreport_detail_housekeepingreport_detail_component__["a" /* HousekeepingreportDetailComponent */] },
    { path: 'housekeeping-create', component: __WEBPACK_IMPORTED_MODULE_41_app_housekeepingreport_create_housekeepingreport_create_component__["a" /* HousekeepingreportCreateComponent */] },
    { path: 'housekeeping-edit/:id', component: __WEBPACK_IMPORTED_MODULE_42_app_housekeepingreport_edit_housekeepingreport_edit_component__["a" /* HousekeepingreportEditComponent */] },
    { path: 'roomoccupancy', component: __WEBPACK_IMPORTED_MODULE_43_app_roomoccupancy_roomoccupancy_component__["a" /* RoomoccupancyComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.routing.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/environment.js.map

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style = \"background-color: Aqua\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\" >Hotel Management</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink = '/home'>Home</a></li>\n        <li><a routerLink = '/bookings'>Booking</a></li>\n        <li><a routerLink = '/staffs'>Staff</a></li>\n        <li><a routerLink = '/schedules'>Housekeeping Schedule</a></li>\n        <li><a routerLink = '/reports'>Reports</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\" ><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\" ><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n<div class=\"container\">\n  <div class=\"row\">\n    <!-- routing here -->\n\t<router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Booking</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveBooking()\" #bookingForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.selected_room\" name=\"selected_room\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Customer Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.customer_name\" name=\"customer_name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Number of People</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.numberofpeople\" name=\"num_of_people\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">NRIC</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.customer_nric\" name=\"nric\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Phone Number</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.phonenumber\" name=\"phonenum\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Check In Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"booking.checkindate\" name=\"check_in_date\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Check In Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"booking.checkoutdate\" name=\"check_out_date\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookingForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ booking.customer_name }}</h1>\n  <dl class=\"list\">\n    <dt>RoomID</dt>\n    <td>{{ booking.selected_room }}</td>\n    <dt>Customername</dt>\n    <td>{{ booking.customer_name }}</td>\n    <dt>Number Of People</dt>\n    <td>{{ booking.numberofpeople }}</td>\n    <dt>Nric</dt>\n    <td>{{ booking.customer_nric }}</td>\n    <dt>Phone-Number</dt>\n    <td>{{ booking.phonenumber }}</td>\n    <dt>Check-In-Date</dt>\n    <td>{{ booking.checkindate }}</td>    \n    <dt>Check-Out-Date</dt>\n    <td>{{ booking.checkoutdate }}</td>    \n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/booking-edit', booking._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBooking(booking._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Booking</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateBooking(booking._id)\" #bookingForm=\"ngForm\">\n<div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.selected_room\" name=\"selected_room\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Customer Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.customer_name\" name=\"customer_name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Number of People</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.numberofpeople\" name=\"num_of_people\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">NRIC</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.customer_nric\" name=\"nric\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Phone Number</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.phonenumber\" name=\"phonenum\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Check In Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"booking.checkindate\" name=\"check_in_date\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Check In Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"booking.checkoutdate\" name=\"check_out_date\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookingForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Room Booking \n    <a [routerLink]=\"['/booking-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">Make new Booking</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>RoomID</th>\n        <th>Customer Name</th>\n        <th>Number of People</th>\n        <th>Nric</th>\n        <th>Phone Number</th>\n        <th>Check-In Date</th>\n        <th>Check-Out Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let booking of bookings\">\n        <td>{{ booking.selected_room }}</td>\n        <td>{{ booking.customer_name }}</td>\n        <td>{{ booking.numberofpeople }}</td>\n        <td>{{ booking.customer_nric }}</td>\n        <td>{{ booking.phonenumber }}</td>\n        <td>{{ booking.checkindate }}</td>\n        <td>{{ booking.checkoutdate }}</td>\n        <td><a [routerLink]=\"['/booking-details', booking._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Daily Report</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveDaily()\" #dailyForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <label for=\"name\">Day</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"daily.day\" name=\"day\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"daily.room\" name=\"room\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"daily.occupancy\" name=\"occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!dailyForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ daily.title }}</h1>\n  <dl class=\"list\">\n    <dt>Day</dt>\n    <td>{{ daily.day }}</td>\n    <dt>Room</dt>\n    <td>{{ daily.room }}</td>\n    <dt>Occupancy</dt>\n    <td>{{ daily.occupancy }}</td>\n    <dt>Update Date</dt>\n    <dd>{{ daily.updated_at }}</dd>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/daily-edit', daily._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteDaily(daily._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Daily</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateDaily(daily._id)\" #dailyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Day</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"daily.day\" name=\"day\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"daily.room\" name=\"room\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"daily.occupancy\" name=\"occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!dailyForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Daily Reports\n    <a [routerLink]=\"['/daily-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">Make New Daily Report</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Day</th>\n        <th>Room</th>\n        <th>Occupancy</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let daily of dailys\">\n        <td>{{ daily.day }}</td>\n        <td>{{ daily.room }}</td>\n        <td>{{ daily.occupancy }}</td>\n        <td><a [routerLink]=\"['/daily-details', daily._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Guest</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveGuest()\" #guestForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"guest.roomid\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Number Of People</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"guest.numberofpeople\" name=\"numberofpeople\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Booked By</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"guest.bookedby\" name=\"bookedby\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!guestForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ guest.title }}</h1>\n  <dl class=\"list\">\n    <dt>RoomID</dt>\n    <dd>{{ guest.roomid }}</dd>\n    <dt>Occupancy</dt>\n    <dd>{{ guest.numberofpeople }}</dd>\n    <dt>Booked By</dt>\n    <dd>{{ guest.bookedby }}</dd>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/guest-edit', guest._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteGuest(guest._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Guest</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateGuest(guest._id)\" #guestForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Room</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"guest.roomid\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Number Of People</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"guest.numberofpeople\" name=\"numberofpeople\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Booked By</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"guest.bookedby\" name=\"bookedby\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!guestForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Guests\n    <a [routerLink]=\"['/guest-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">New Guest in Room</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>RoomID</th>\n        <th>Number Of People</th>\n        <th>Booked By</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let guest of guests\">\n        <td>{{ guest.roomid }}</td>\n        <td>{{ guest.numberofpeople }}</td>\n        <td>{{ guest.bookedby }}</td>\n        <td><a [routerLink]=\"['/guest-details', guest._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Housekeeping</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveHousekeeping()\" #housekeepingForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Name\" name=\"Name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Position</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Position\" name=\"Position\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Duties</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Duties\" name=\"Duties\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Working Status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Workingstatus\" name=\"Workingstatus\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Break Time</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Breaktime\" name=\"Breaktime\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Leave Application</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Leaveapplication\" name=\"Leaveapplication\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!housekeepingForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ housekeeping.Name }}</h1>\n  <dl class=\"list\">\n      <th>Position</th>\n      <td>{{ housekeeping.Position }}</td>\n      <th>Duties</th>\n      <td>{{ housekeeping.Duties }}</td>\n      <th>Working Status</th>\n      <td>{{ housekeeping.Workingstatus }}</td>\n      <th>Break Time</th>\n      <td>{{ housekeeping.Breaktime }}</td>\n      <th>Leave Application</th>\n      <td>{{ housekeeping.Leaveapplication }}</td>  \n      \n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/housekeeping-edit', housekeeping._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteHousekeeping(housekeeping._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Housekeeping</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateHousekeeping(housekeeping._id)\" #housekeepingForm=\"ngForm\">\n          <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Name\" name=\"Name\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Position</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Position\" name=\"Position\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Duties</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Duties\" name=\"Duties\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Working Status</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Workingstatus\" name=\"Workingstatus\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Break Time</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Breaktime\" name=\"Breaktime\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Leave Application</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"housekeeping.Leaveapplication\" name=\"Leaveapplication\" required>\n            </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!housekeepingForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Housekeeping Report\n    <a [routerLink]=\"['/housekeeping-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Position</th>\n        <th>Duties</th>\n        <th>Working Status</th>\n        <th>Break Time</th>\n        <th>Leave Application</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let housekeeping of housekeepings\">\n        <td>{{ housekeeping.Name }}</td>\n        <td>{{ housekeeping.Position }}</td>\n        <td>{{ housekeeping.Duties }}</td>\n        <td>{{ housekeeping.Workingstatus }}</td>\n        <td>{{ housekeeping.Breaktime }}</td>\n        <td>{{ housekeeping.Leaveapplication }}</td>\n        <td><a [routerLink]=\"['/housekeeping-details', housekeeping._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Monthly</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveMonthly()\" #monthlyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Month</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"monthly.Month\" name=\"month\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"monthly.RoomID\" name=\"roomid\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"monthly.Occupancy\" name=\"occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!monthlyForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{monthly.Month}} Report</h1>\n  <dl class=\"list\">\n    <dt>Month</dt>\n    <td>{{ monthly.Month }}</td>\n    <dt>RoomID</dt>\n    <td>{{ monthly.RoomID }}</td>\n    <dt>Occupancy</dt>\n    <td>{{ monthly.Occupancy }}</td>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/monthly-edit', monthly._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteMonthly(monthly._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Monthly</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateMonthly(monthly._id)\" #monthlyForm=\"ngForm\">\n          <div class=\"form-group\">\n              <label for=\"name\">Month</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"monthly.Month\" name=\"month\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">RoomID</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"monthly.RoomID\" name=\"roomid\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Occupancy</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"monthly.Occupancy\" name=\"occupancy\" required>\n            </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!monthlyForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Monthly Report\n    <a [routerLink]=\"['/monthly-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Month</th>\n        <th>RoomID</th>\n        <th>Occupancy</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let monthly of monthlys\">\n        <td>{{ monthly.Month }}</td>\n        <td>{{ monthly.RoomID }}</td>\n        <td>{{ monthly.Occupancy }}</td>\n        <td><a [routerLink]=\"['/monthly-details', monthly._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<p><a routerLink = '/guests'>Guests in Rooms Reports</a></p>\n<p><a routerLink = '/statuss'>Room Status Report</a></p>\n<p><a routerLink = '/housekeepings'>Housekeeping Report</a></p>\n<p><a routerLink = '/roomoccupancy'>Room Occupancy Reports</a></p>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<p><a routerLink = '/dailys'>Daily Reports</a></p>\n<p><a routerLink = '/weeklys'>Weekly Reports</a></p>\n<p><a routerLink = '/monthlys'>Monthly Reports</a></p>\n<p><a routerLink = '/yearlys'>Yearly Reports</a></p>"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Status</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveStatus()\" #statusForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!statusForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ status.RoomID }}</h1>\n  <dl class=\"list\">\n    <dt>RoomID</dt>\n    <td>{{ status.RoomID }}</td>\n    <dt>Occupancy</dt>\n    <td>{{ status.Occupancy }}</td>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/status-edit', status._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteStatus(status._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Status</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateStatus(status._id)\" #statusForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!statusForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Status Report\n    <a [routerLink]=\"['/status-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>RoomID</th>\n        <th>Occupancy</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let status of statuss\">\n        <td>{{ status.RoomID }}</td>\n        <td>{{ status.Occupancy }}</td>\n        <td><a [routerLink]=\"['/status-details', status._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Schedule</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveSchedule()\" #scheduleForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.isbn\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">In-Charge</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.title\" name=\"InCharge\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.author\" name=\"Status\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Cleaned Time</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.publisher\" name=\"Cleanedtime\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Do Not Disturb</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"schedule.price\" name=\"donotdisturb\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!scheduleForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Housekeeping Room: {{ schedule.RoomID }}</h1>\n  <dl class=\"list\">\n    <dt>RoomID</dt>\n    <td>{{ schedule.RoomID }}</td>\n    <dt>In-Charge</dt>\n    <td>{{ schedule.InCharge }}</td>\n    <dt>Status</dt>\n    <td>{{ schedule.Status }}</td>    \n    <dt>Cleaned Time</dt>\n    <td>{{ schedule.Cleanedtime }}</td>\n    <dt>Do Not Disturb</dt>\n    <td>{{ schedule.donotdisturb }}</td>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/schedule-edit', schedule._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteSchedule(schedule._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Schedule</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateSchedule(schedule._id)\" #scheduleForm=\"ngForm\">\n          <div class=\"form-group\">\n              <label for=\"name\">RoomID</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.isbn\" name=\"RoomID\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">In-Charge</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.title\" name=\"InCharge\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Status</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.author\" name=\"Status\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Cleaned Time</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.publisher\" name=\"Cleanedtime\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Do Not Disturb</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"schedule.price\" name=\"donotdisturb\" required>\n            </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!scheduleForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Housekeeping Schedule\n    <a [routerLink]=\"['/schedule-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>RoomID</th>\n        <th>In-Charge</th>\n        <th>Status</th>\n        <th>Cleaned Time</th>\n        <th>Do not disturb</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let schedule of schedules\">\n        <td>{{ schedule.RoomID }}</td>\n        <td>{{ schedule.InCharge }}</td>\n        <td>{{ schedule.Status }}</td>\n        <td>{{ schedule.Cleanedtime }}</td>\n        <td>{{ schedule.donotdisturb }}</td>\n        <td><a [routerLink]=\"['/schedule-details', schedule._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Staff</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveStaff()\" #staffForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.name\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Identification Number</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.idnum\" name=\"idnum\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Date-Of-Birth</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"staff.dateofbirth\" name=\"dateofbirth\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Bank Account</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.bankaccount\" name=\"bankaccount\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Home Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.address\" name=\"address\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Phone Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.number\" name=\"phone\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Duty and Position</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.position\" name=\"position\" required>\n            </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!staffForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ staff.name }}</h1>\n  <dl class=\"list\">\n    <dt>ID Number</dt>\n    <td>{{ staff.idnum }}</td>\n    <dt>Date-Of-Birth</dt>\n    <td>{{ staff.dateofbirth }}</td>\n    <dt>Bank Account</dt>\n    <td>{{ staff.bankaccount }}</td>\n    <dt>Home Address</dt>\n    <td>{{ staff.address }}</td>\n    <dt>Phone Number</dt>\n    <td>{{ staff.number }}</td>\n    <dt>Duty and Position</dt>\n    <td>{{ staff.position }}</td>    \n  </dl>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/staff-edit', staff._id]\" class=\"btn btn-success\">EDIT</a>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteStaff(staff._id)\">DELETE</button>\n      \n    </div>\n  </div>"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Edit Staff</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (ngSubmit)=\"updateStaff(staff._id)\" #staffForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.name\" name=\"name\" required>\n          </div> \n          <div class=\"form-group\">\n            <label for=\"name\">ID Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.idnum\" name=\"idnum\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Date-Of-Birth</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"staff.dateofbirth\" name=\"dateofbirth\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Bank Account</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.bankaccount\" name=\"bankaccount\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Home Address</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.address\" name=\"address\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Phone Number</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.number\" name=\"phone\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Duty and Position</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.position\" name=\"position\" required>\n            </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!staffForm.form.valid\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Staff Management\n    <a [routerLink]=\"['/staff-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">New Staff</span>\n    </a>\n  </h1>\n  \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Identification Number</th>\n        <th>Date-Of-Birth</th>\n        <th>Bank Account</th>\n        <th>Home Address</th>\n        <th>Phone Number</th>\n        <th>Duty and Position</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let staff of staffs\">\n        <td>{{ staff.name }}</td>\n        <td>{{ staff.idnum }}</td>\n        <td>{{ staff.dateofbirth }}</td>\n        <td>{{ staff.bankaccount }}</td>\n        <td>{{ staff.address }}</td>\n        <td>{{ staff.number }}</td>\n        <td>{{ staff.position }}</td>\n        <td><a [routerLink]=\"['/staff-details', staff._id]\">Show Details</a></td>        \n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Weekly</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveWeekly()\" #weeklyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Week</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.Week\" name=\"Week\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weeklyForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ weekly.title }}</h1>\n  <dl class=\"list\">\n    <dt>ISBN</dt>\n    <dd>{{ weekly.isbn }}</dd>\n    <dt>Author</dt>\n    <dd>{{ weekly.author }}</dd>\n    <dt>Publisher</dt>\n    <dd>{{ weekly.publisher }}</dd>\n    <dt>Price</dt>\n    <dd>{{ weekly.price }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ weekly.updated_at }}</dd>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/weekly-edit', weekly._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteWeekly(weekly._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Weekly Report</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateWeekly(weekly._id)\" #weeklyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Week</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.Week\" name=\"Week\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">RoomID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"weekly.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!weeklyForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Weekly Reports\n    <a [routerLink]=\"['/weekly-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Week</th>\n        <th>Room ID</th>\n        <th>Occupancy</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let weekly of weeklys\">\n        <td>{{ weekly.Week }}</td>\n        <td>{{ weekly.RoomID }}</td>\n        <td>{{ weekly.Occupancy }}</td>\n        <td><a [routerLink]=\"['/weekly-details', weekly._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Yearly</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveyearly()\" #yearlyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Year</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"yearly.Year\" name=\"Year\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Room ID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"yearly.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"yearly.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!yearlyForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ yearly.Year }}</h1>\n  <dl class=\"list\">\n      <dt>Year</dt>\n      <td>{{ yearly.Year }}</td>\n      <dt>RoomID</dt>\n      <td>{{ yearly.RoomID }}</td>\n      <dt>Occupancy</dt>\n      <td>{{ yearly.Occupancy }}</td>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/yearly-edit', yearly._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteYearly(yearly._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Yearly</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateYearly(yearly._id)\" #yearlyForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Year</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"yearly.Year\" name=\"Year\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Room ID</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"yearly.RoomID\" name=\"RoomID\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Occupancy</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"yearly.Occupancy\" name=\"Occupancy\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!yearlyForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Yearly Report\n    <a [routerLink]=\"['/yearly-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Year</th>\n        <th>RoomID</th>\n        <th>Occupancy</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let yearly of yearlys\">\n          <td>{{ yearly.Year }}</td>\n          <td>{{ yearly.RoomID }}</td>\n          <td>{{ yearly.Occupancy }}</td>\n        <td><a [routerLink]=\"['/yearly-details', yearly._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(443);


/***/ })

},[838]);
//# sourceMappingURL=main.bundle.map