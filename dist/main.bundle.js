webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(241);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(241);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(241);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(106);
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
            template: __webpack_require__(694),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookingCreateComponent);
    return BookingCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-create.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(106);
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
            template: __webpack_require__(695),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _c) || Object])
    ], BookingDetailComponent);
    return BookingDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-detail.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(106);
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
            template: __webpack_require__(696),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookingEditComponent);
    return BookingEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking-edit.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking_service__ = __webpack_require__(106);
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
            template: __webpack_require__(697),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */]) === 'function' && _a) || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/booking.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(107);
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
            template: __webpack_require__(698),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ScheduleCreateComponent);
    return ScheduleCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-create.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(107);
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
            template: __webpack_require__(699),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _c) || Object])
    ], ScheduleDetailComponent);
    return ScheduleDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-detail.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__(107);
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
            template: __webpack_require__(700),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ScheduleEditComponent);
    return ScheduleEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule-edit.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__(107);
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
            template: __webpack_require__(701),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */]) === 'function' && _a) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/schedule.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(108);
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
            template: __webpack_require__(702),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], StaffCreateComponent);
    return StaffCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-create.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(108);
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
            template: __webpack_require__(703),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], StaffDetailComponent);
    return StaffDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-detail.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(108);
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
            template: __webpack_require__(704),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], StaffEditComponent);
    return StaffEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff-edit.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_service__ = __webpack_require__(108);
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
            template: __webpack_require__(705),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__staff_service__["a" /* StaffService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__staff_service__["a" /* StaffService */]) === 'function' && _a) || Object])
    ], StaffComponent);
    return StaffComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/staff.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(523);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/main.js.map

/***/ }),

/***/ 522:
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
            template: __webpack_require__(693),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__staff_staff_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff_detail_staff_detail_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_create_staff_create_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_edit_staff_edit_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_booking_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__booking_booking_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__booking_detail_booking_detail_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__booking_create_booking_create_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__booking_edit_booking_edit_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__schedule_detail_schedule_detail_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_create_schedule_create_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__schedule_edit_schedule_edit_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_schedule_service__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_20__schedule_edit_schedule_edit_component__["a" /* ScheduleEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_app_app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_12_app_booking_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_21_app_schedule_service__["a" /* ScheduleService */], { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_staff_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_staff_create_staff_create_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_staff_detail_staff_detail_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_staff_edit_staff_edit_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_booking_booking_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_booking_detail_booking_detail_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_booking_create_booking_create_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_booking_edit_booking_edit_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_schedule_schedule_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_schedule_detail_schedule_detail_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_schedule_create_schedule_create_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_schedule_edit_schedule_edit_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });













var appRoutes = [
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
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/kiat beng/angular-apps/hotelmanagement/src/app.routing.js.map

/***/ }),

/***/ 525:
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

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style = \"background-color: Aqua\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\" >Hotel Management</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a >Home</a></li>\n        <li><a routerLink = '/bookings'>Booking</a></li>\n        <li><a routerLink = '/staffs'>Staff</a></li>\n        <li><a routerLink = '/schedules'>Housekeeping Schedule</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\" ><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\" ><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n<div class=\"container\">\n  <div class=\"row\">\n    <!-- routing here -->\n\t<router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Booking</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveBooking()\" #bookingForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookingForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ booking.title }}</h1>\n  <dl class=\"list\">\n    <dt>ISBN</dt>\n    <dd>{{ booking.isbn }}</dd>\n    <dt>Author</dt>\n    <dd>{{ booking.author }}</dd>\n    <dt>Publisher</dt>\n    <dd>{{ booking.publisher }}</dd>\n    <dt>Price</dt>\n    <dd>{{ booking.price }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ booking.updated_at }}</dd>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/booking-edit', booking._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteSchedule(schedule._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Booking</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateBooking(booking._id)\" #bookingForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"booking.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookingForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Booking Catalogue\n    <a [routerLink]=\"['/booking-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let booking of bookings\">\n        <td>{{ booking.title }}</td>\n        <td>{{ booking.author }}</td>\n        <td><a [routerLink]=\"['/booking-details', booking._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Schedule</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveSchedule()\" #scheduleForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"schedule.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!scheduleForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ schedule.title }}</h1>\n  <dl class=\"list\">\n    <dt>ISBN</dt>\n    <dd>{{ schedule.isbn }}</dd>\n    <dt>Author</dt>\n    <dd>{{ schedule.author }}</dd>\n    <dt>Publisher</dt>\n    <dd>{{ schedule.publisher }}</dd>\n    <dt>Price</dt>\n    <dd>{{ schedule.price }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ schedule.updated_at }}</dd>\n  </dl>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/schedule-edit', schedule._id]\" class=\"btn btn-success\">EDIT</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteSchedule(schedule._id)\">DELETE</button>\n  </div>\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Schedule</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateSchedule(schedule._id)\" #scheduleForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"schedule.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!scheduleForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Housekeeping Schedule\n    <a [routerLink]=\"['/schedule-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let schedule of schedules\">\n        <td>{{ schedule.title }}</td>\n        <td>{{ schedule.author }}</td>\n        <td><a [routerLink]=\"['/schedule-details', schedule._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Staff</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveStaff()\" #staffForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.name\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Identification Number</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.idnum\" name=\"idnum\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Date-Of-Birth</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"staff.dateofbirth\" name=\"dateofbirth\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Bank Account</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.bankaccount\" name=\"bankaccount\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Home Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.address\" name=\"address\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Phone Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.number\" name=\"phone\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Duty and Position</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.position\" name=\"position\" required>\n            </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!staffForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ staff.name }}</h1>\n  <dl class=\"list\">\n    <dt>ID Number</dt>\n    <td>{{ staff.idnum }}</td>\n    <dt>Date-Of-Birth</dt>\n    <td>{{ staff.dateofbirth }}</td>\n    <dt>Bank Account</dt>\n    <td>{{ staff.bankaccount }}</td>\n    <dt>Home Address</dt>\n    <td>{{ staff.address }}</td>\n    <dt>Phone Number</dt>\n    <td>{{ staff.number }}</td>\n    <dt>Duty and Position</dt>\n    <td>{{ staff.position }}</td>    \n  </dl>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/staff-edit', staff._id]\" class=\"btn btn-success\">EDIT</a>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteStaff(staff._id)\">DELETE</button>\n      \n    </div>\n  </div>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Edit Staff</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (ngSubmit)=\"updateStaff(staff._id)\" #staffForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.name\" name=\"name\" required>\n          </div> \n          <div class=\"form-group\">\n            <label for=\"name\">ID Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.idnum\" name=\"idnum\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Date-Of-Birth</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"staff.dateofbirth\" name=\"dateofbirth\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Bank Account</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.bankaccount\" name=\"bankaccount\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Home Address</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.address\" name=\"address\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Phone Number</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"staff.number\" name=\"phone\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Duty and Position</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.position\" name=\"position\" required>\n            </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!staffForm.form.valid\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Staff Management\n    <a [routerLink]=\"['/staff-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">New Staff</span>\n    </a>\n  </h1>\n  \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Identification Number</th>\n        <th>Date-Of-Birth</th>\n        <th>Bank Account</th>\n        <th>Home Address</th>\n        <th>Phone Number</th>\n        <th>Duty and Position</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let staff of staffs\">\n        <td>{{ staff.name }}</td>\n        <td>{{ staff.idnum }}</td>\n        <td>{{ staff.dateofbirth }}</td>\n        <td>{{ staff.bankaccount }}</td>\n        <td>{{ staff.address }}</td>\n        <td>{{ staff.number }}</td>\n        <td>{{ staff.position }}</td>\n        <td><a [routerLink]=\"['/staff-details', staff._id]\">Show Details</a></td>        \n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ })

},[738]);
//# sourceMappingURL=main.bundle.map