(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Rpu":
    /*!***********************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/productos/productos.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ProductosComponent */

    /***/
    function Rpu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductosComponent", function () {
        return ProductosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductosComponent_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var cliente_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", cliente_r20._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cliente_r20.nombre);
        }
      }

      function ProductosComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.Modal_Cliente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nuevo Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.Modal_Producto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nuevo Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_tr_32_td_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_tr_32_td_8_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var producto_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.editar(producto_r25._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_tr_32_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32);

            var producto_r25 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.verProducto(producto_r25._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Ver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ProductosComponent_tr_32_td_8_Template, 3, 0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var producto_r25 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("E ", producto_r25.cliente.codigo, " - ", producto_r25.codigo, " - ", producto_r25.version, " - ", producto_r25.edicion, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](producto_r25.producto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.usuario.Maquinaria == 2);
        }
      }

      function ProductosComponent_tr_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_tr_59_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var i_r34 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.delete_this_almacen(i_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var almacen_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", almacen_r33, " ");
        }
      }

      function ProductosComponent_option_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var grupo_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", grupo_r37._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](grupo_r37.nombre);
        }
      }

      function ProductosComponent_option_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r39 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", i_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Montaje ", ctx_r7.NumToLet(i_r39), "");
        }
      }

      function ProductosComponent_div_172_table_1_tr_12_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var Material_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" (", Material_r47.ancho, " x ", Material_r47.ancho, ") ");
        }
      }

      function ProductosComponent_div_172_table_1_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_172_table_1_tr_12_ng_container_3_Template, 2, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_div_172_table_1_tr_12_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var Material_r47 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r50.Delete_Material(Material_r47.material);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var Material_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", Material_r47.material, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", Material_r47.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](Material_r47.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](Material_r47.cantidad);
        }
      }

      function ProductosComponent_div_172_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Materia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductosComponent_div_172_table_1_tr_12_Template, 14, 4, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r42.MATERIALES_NECESARIOS[ctx_r42.i_montajes]);
        }
      }

      function ProductosComponent_div_172_div_2_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", seccion_r53.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](seccion_r53.nombre);
        }
      }

      function ProductosComponent_div_172_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Categoria:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_div_172_div_2_Template_select_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r54.selecciona_producto($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selecciona Categoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ProductosComponent_div_172_div_2_option_9_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r43.SECCIONES);
        }
      }

      function ProductosComponent_div_172_div_3_ng_container_10_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" (", producto_r59.ancho, " x ", producto_r59.largo, ") ");
        }
      }

      function ProductosComponent_div_172_div_3_ng_container_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_172_div_3_ng_container_10_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", producto_r59._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", producto_r59.nombre, " (", producto_r59.marca, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", producto_r59.ancho);
        }
      }

      function ProductosComponent_div_172_div_3_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_div_172_div_3_ng_container_10_ng_container_1_Template, 4, 4, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r59 = ctx.$implicit;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", producto_r59.grupo.nombre === ctx_r57.product_selected);
        }
      }

      function ProductosComponent_div_172_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Producto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 73, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_div_172_div_3_Template_select_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r64.producto_seleccionado($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Selecciona Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ProductosComponent_div_172_div_3_ng_container_10_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cantidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 76, 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", i_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r44.MATERIALES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "cantidad", i_r41, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r44._producto_seleccionado);
        }
      }

      function ProductosComponent_div_172_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_div_172_div_4_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69);

            var i_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r67.add_materia(i_r41, ctx_r67.size);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Agregar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_div_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_div_172_table_1_Template, 13, 1, "table", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductosComponent_div_172_div_2_Template, 10, 1, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_172_div_3_Template, 18, 4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductosComponent_div_172_div_4_Template, 8, 0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r41 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r41 == ctx_r8.i_montajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r41 == ctx_r8.i_montajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r41 == ctx_r8.i_montajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r41 == ctx_r8.i_montajes);
        }
      }

      function ProductosComponent_option_214_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r71 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", i_r71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("M-", ctx_r9.OneProduct.cliente.codigo, "-", ctx_r9.OneProduct.codigo, "-", ctx_r9.OneProduct.version, "-", ctx_r9.NumToLet(i_r71), "");
        }
      }

      function ProductosComponent_tr_223_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Calibre (pt.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Gramaje (g/m\xB2):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Direcci\xF3n de fibra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", TintaProducto_r72.producto.nombre, " (", TintaProducto_r72.producto.ancho, " x ", TintaProducto_r72.producto.largo, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](TintaProducto_r72.producto.calibre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](TintaProducto_r72.producto.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](TintaProducto_r72.producto.largo);
        }
      }

      function ProductosComponent_tr_223_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_tr_223_ng_container_1_Template, 20, 6, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r72.producto.grupo.nombre === "Sustrato");
        }
      }

      function ProductosComponent_tr_231_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", TintaProducto_r75.producto.color, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", TintaProducto_r75.producto.nombre, "(", TintaProducto_r75.producto.marca, ") ");
        }
      }

      function ProductosComponent_tr_231_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_tr_231_ng_container_1_Template, 5, 3, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r75.producto.grupo.nombre === "Tinta");
        }
      }

      function ProductosComponent_tr_237_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", TintaProducto_r78.producto.nombre, " (", TintaProducto_r78.producto.marca, ") ");
        }
      }

      function ProductosComponent_tr_237_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_tr_237_ng_container_1_Template, 2, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r78.producto.grupo.nombre === "Barniz");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Negro:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("", ctx_r84.OneProduct.cliente.codigo, "-", ctx_r84.OneProduct.codigo, "-", ctx_r84.OneProduct.version, "-", ctx_r84.NumToLet(ctx_r84.i_montajes), "-1 ");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cyan:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("", ctx_r85.OneProduct.cliente.codigo, "-", ctx_r85.OneProduct.codigo, "-", ctx_r85.OneProduct.version, "-", ctx_r85.NumToLet(ctx_r85.i_montajes), "-2 ");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Magenta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("", ctx_r86.OneProduct.cliente.codigo, "-", ctx_r86.OneProduct.codigo, "-", ctx_r86.OneProduct.version, "-", ctx_r86.NumToLet(ctx_r86.i_montajes), "-3 ");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Amarillo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("", ctx_r87.OneProduct.cliente.codigo, "-", ctx_r87.OneProduct.codigo, "-", ctx_r87.OneProduct.version, "-", ctx_r87.NumToLet(ctx_r87.i_montajes), "-4 ");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_div_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).index;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate5"](" ", ctx_r89.OneProduct.cliente.codigo, "-", ctx_r89.OneProduct.codigo, "-", ctx_r89.OneProduct.version, "-", ctx_r89.NumToLet(ctx_r89.i_montajes), "-", ctx_r89.sumaTintas(i_r82), " ");
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_ng_container_246_ng_container_1_div_5_ng_container_3_Template, 2, 5, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", TintaProducto_r81.producto.color, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r88.cinco);
        }
      }

      function ProductosComponent_ng_container_246_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_ng_container_246_ng_container_1_p_1_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductosComponent_ng_container_246_ng_container_1_p_2_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_ng_container_246_ng_container_1_p_3_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductosComponent_ng_container_246_ng_container_1_p_4_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductosComponent_ng_container_246_ng_container_1_div_5_Template, 4, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.color === "Negro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.color === "Cyan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.color === "Magenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.color === "Amarillo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.color != "Amarillo" && TintaProducto_r81.producto.color != "Magenta" && TintaProducto_r81.producto.color != "Cyan" && TintaProducto_r81.producto.color != "Negro");
        }
      }

      function ProductosComponent_ng_container_246_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_ng_container_246_ng_container_1_Template, 6, 5, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r81.producto.grupo.nombre === "Tinta");
        }
      }

      function ProductosComponent_tr_265_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", TintaProducto_r93.producto.ancho, " cm.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", TintaProducto_r93.producto.largo, " cm.");
        }
      }

      function ProductosComponent_tr_265_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_tr_265_ng_container_1_Template, 5, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r93 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r93.producto.grupo.nombre === "Sustrato");
        }
      }

      function ProductosComponent_ng_container_273_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pegamento aprobado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function ProductosComponent_ng_container_273_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cantidad de unidades por caja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function ProductosComponent_ng_container_273_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_ng_container_273_ng_container_1_Template, 3, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductosComponent_ng_container_273_ng_container_2_Template, 3, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r96 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r96.producto.grupo.nombre === "Pega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r96.producto.grupo.nombre === "Cajas Corrugadas");
        }
      }

      function ProductosComponent_ng_container_275_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", TintaProducto_r99.producto.nombre, " (", TintaProducto_r99.producto.marca, ") ");
        }
      }

      function ProductosComponent_ng_container_275_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](TintaProducto_r99.cantidad);
        }
      }

      function ProductosComponent_ng_container_275_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_ng_container_275_ng_container_1_Template, 3, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductosComponent_ng_container_275_ng_container_2_Template, 3, 1, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r99 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r99.producto.grupo.nombre === "Pega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", TintaProducto_r99.producto.grupo.nombre === "Cajas Corrugadas");
        }
      }

      function ProductosComponent_option_299_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_option_299_Template_option_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r106);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r105.OneProduct.grupo._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var grupo_r104 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r17.OneProduct.grupo._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](grupo_r104.nombre);
        }
      }

      function ProductosComponent_option_361_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r108 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", i_r108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Montaje ", ctx_r18.NumToLet(i_r108), "");
        }
      }

      function ProductosComponent_div_376_table_1_tr_12_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var Material_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" (", Material_r116.producto.ancho, " x ", Material_r116.producto.ancho, ") ");
        }
      }

      function ProductosComponent_div_376_table_1_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_376_table_1_tr_12_ng_container_3_Template, 2, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_div_376_table_1_tr_12_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r120);

            var Material_r116 = ctx.$implicit;

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r119.Delete_Material2(Material_r116.producto.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var Material_r116 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", Material_r116.producto.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", Material_r116.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](Material_r116.producto.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](Material_r116.cantidad);
        }
      }

      function ProductosComponent_div_376_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Materia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductosComponent_div_376_table_1_tr_12_Template, 14, 4, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r111.OneProduct.materiales[ctx_r111.i_montajes_]);
        }
      }

      function ProductosComponent_div_376_div_2_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r122 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", seccion_r122.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](seccion_r122.nombre);
        }
      }

      function ProductosComponent_div_376_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Categoria:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_div_376_div_2_Template_select_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r124);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r123.selecciona_producto2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selecciona Categoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ProductosComponent_div_376_div_2_option_9_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r112.SECCIONES);
        }
      }

      function ProductosComponent_div_376_div_3_ng_container_10_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" (", producto_r128.ancho, " x ", producto_r128.largo, ") ");
        }
      }

      function ProductosComponent_div_376_div_3_ng_container_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_376_div_3_ng_container_10_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", producto_r128._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", producto_r128.nombre, " (", producto_r128.marca, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", producto_r128.ancho);
        }
      }

      function ProductosComponent_div_376_div_3_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_div_376_div_3_ng_container_10_ng_container_1_Template, 4, 4, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r128 = ctx.$implicit;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", producto_r128.grupo.nombre === ctx_r126.product_selected);
        }
      }

      function ProductosComponent_div_376_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Producto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 73, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_div_376_div_3_Template_select_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r133.producto_seleccionado($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Selecciona Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ProductosComponent_div_376_div_3_ng_container_10_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cantidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 76, 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "x-", i_r110, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r113.MATERIALES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "xcantidad", i_r110, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r113._producto_seleccionado);
        }
      }

      function ProductosComponent_div_376_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_div_376_div_4_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r138);

            var i_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r136.add_materia3(i_r110, ctx_r136.size);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Agregar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductosComponent_div_376_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductosComponent_div_376_table_1_Template, 13, 1, "table", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductosComponent_div_376_div_2_Template, 10, 1, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductosComponent_div_376_div_3_Template, 18, 4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductosComponent_div_376_div_4_Template, 8, 0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r110 = ctx.index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r110 == ctx_r19.i_montajes_);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r110 == ctx_r19.i_montajes_);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r110 == ctx_r19.i_montajes_);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r110 == ctx_r19.i_montajes_);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      var _c1 = function _c1() {
        return [];
      };

      var ProductosComponent = /*#__PURE__*/function () {
        function ProductosComponent(api, fb) {
          _classCallCheck(this, ProductosComponent);

          this.api = api;
          this.fb = fb;
          this.NUEVO_CLIENTE = false;
          this.MATERIALES_NECESARIOS = [];
          this.NUEVO_PRODUCTO = false;
          this.EJEMPLARES = [];
          this.POST = [];
          this.SUSTRATO = [];
          this.Sus_Done = false;
          this.dimensiones = [];
          this._producto_seleccionado = false;
          this.montajes = 1;
          this.i_montajes = 0;
          this.i_montajes_ = 0;
          this.necesidad = 0;
          this.listo = true;
          this.cinco = true;
          this.seis = true;
          this.siete = true;
          this.ocho = true;
          this.almacenes = [];
          this.new_almacen = '';
          this.VER_PRODUCTO = false;
          this.OneProduct = {
            producto: '',
            cliente: {
              nombre: '',
              codigo: ''
            },
            grupo: {
              _id: ''
            },
            codigo: '',
            version: '',
            ejemplares: [],
            dimensiones: '',
            fibra: '',
            post: [],
            sustrato: [{
              nombre: '',
              marca: '',
              calibre: '',
              gramaje: ''
            }],
            materiales: []
          };
          this.ClienteForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            codigo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            almacenes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.EDITAR_PRODUCTO = false;
          this.usuario = api.usuario;
        }

        _createClass(ProductosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerGrupodeMateriales();
            this.BuscarGruposEnAlmacen();
            this.obtenerClientes();
            this.obtenerMateriales();
            this.obtenerGrupos();
            var cliente_id = document.getElementById('cliente_Seleccionado').value; // this.buscar_producto(cliente_id);
          }
        }, {
          key: "NumToLet",
          value: function NumToLet(n) {
            switch (n) {
              case 0:
                return "A";

              case 1:
                return "B";

              case 2:
                return "C";

              case 3:
                return "D";

              case 4:
                return "E";

              case 5:
                return "F";

              case 6:
                return "G";

              case 7:
                return "H";

              case 8:
                return "I";
            }
          }
        }, {
          key: "producto_seleccionado",
          value: function producto_seleccionado(e) {
            if (e === 0) {
              this._producto_seleccionado = false;
            } else {
              this._producto_seleccionado = true;

              if (this.product_selected == 'Sustrato') {
                this._producto_seleccionado = false;
                document.getElementById('cant').hidden = true;
              } else {
                this._producto_seleccionado = true;
                document.getElementById('cant').hidden = false;
              }
            }
          }
        }, {
          key: "selecciona_producto",
          value: function selecciona_producto(e) {
            var clase = this.i_montajes.toString();

            if (e == 0) {
              document.getElementById(clase).disabled = true;
            } else {
              document.getElementById(clase).disabled = false;
              this.product_selected = e;
            }
          }
        }, {
          key: "selecciona_producto2",
          value: function selecciona_producto2(e) {
            var clase = this.i_montajes.toString();

            if (e == 0) {
              document.getElementById("x-".concat(clase)).disabled = true;
            } else {
              document.getElementById("x-".concat(clase)).disabled = false;
              this.product_selected = e;
            }
          }
        }, {
          key: "post_impresion",
          value: function post_impresion(e) {
            var Included = this.POST.includes(e);

            if (!Included) {
              this.POST.push(e);
            } else {
              var i = this.POST.indexOf(e);
              this.POST.splice(i, 1);
            }

            console.log(this.POST);
          }
        }, {
          key: "troquel",
          value: function troquel(e) {
            this.TROQUEL = e.target.value;
          }
        }, {
          key: "Ejemplar",
          value: function Ejemplar(e) {
            if (!this.EJEMPLARES[this.i_montajes]) {
              this.EJEMPLARES[this.i_montajes] = '';
            }

            this.EJEMPLARES[this.i_montajes] = e;
          }
        }, {
          key: "Modal_Cliente",
          value: function Modal_Cliente() {
            if (this.NUEVO_CLIENTE) {
              this.NUEVO_CLIENTE = false;
            } else {
              this.NUEVO_CLIENTE = true;
            }
          }
        }, {
          key: "Modal_Producto",
          value: function Modal_Producto() {
            if (this.NUEVO_PRODUCTO) {
              this.NUEVO_PRODUCTO = false;
            } else {
              this.NUEVO_PRODUCTO = true;
            }
          }
        }, {
          key: "ver_Modal_Producto",
          value: function ver_Modal_Producto() {
            if (this.VER_PRODUCTO) {
              this.VER_PRODUCTO = false;
            } else {
              this.VER_PRODUCTO = true;
              this.i_montajes = 0;
              this.listo = true;
            }
          }
        }, {
          key: "sumaTintas",
          value: function sumaTintas(n) {
            if (this.listo) {
              this.listo = false;
              this.necesidad = n - 5;
              return n + Math.abs(this.necesidad);
            } else {
              return n + Math.abs(this.necesidad);
            }
          }
        }, {
          key: "cambiarCalculo",
          value: function cambiarCalculo() {
            this.listo = true;
          }
        }, {
          key: "add_almacen",
          value: function add_almacen() {
            this.almacenes.push(this.new_almacen);
            this.new_almacen = '';
          }
        }, {
          key: "delete_this_almacen",
          value: function delete_this_almacen(i) {
            var buscar = this.almacenes.find(function (x) {
              return x == i;
            });
            var index = this.almacenes.indexOf(buscar);
            this.almacenes.splice(index, 1);
          }
        }, {
          key: "enable",
          value: function enable(input) {
            var campo = document.getElementById(input).disabled;

            if (campo) {
              document.getElementById(input).disabled = false;
              document.getElementById(input).focus();
            } else {
              document.getElementById(input).disabled = true;
              var buscarSiExiste = this.MATERIALES_NECESARIOS.find(function (c) {
                return c.material == input;
              });

              if (buscarSiExiste) {
                var index = this.MATERIALES_NECESARIOS.indexOf(buscarSiExiste);
                this.MATERIALES_NECESARIOS.splice(index, 1);
              }
            }
          }
        }, {
          key: "just_a_sec",
          value: function just_a_sec(e) {
            var nuevo = this.MATERIALES_NECESARIOS.find(function (c) {
              return c.material == e.target.id;
            });
            var index;

            if (!nuevo) {
              var data = {
                material: e.target.id,
                cantidad: e.target.value
              };
              this.MATERIALES_NECESARIOS.push(data);
            } else {
              index = this.MATERIALES_NECESARIOS.indexOf(nuevo);
              this.MATERIALES_NECESARIOS[index].cantidad = e.target.value;
            }
          }
        }, {
          key: "obtenerGrupodeMateriales",
          value: function obtenerGrupodeMateriales() {
            var _this = this;

            this.api.GetGrupoMp().subscribe(function (resp) {
              _this.GRUPOS_MATERIA = resp;
            });
          }
        }, {
          key: "obtenerClientes",
          value: function obtenerClientes() {
            var _this2 = this;

            this.api.GetClientes().subscribe(function (resp) {
              _this2.CLIENTES = resp.clientes;
            });
          }
        }, {
          key: "addCliente",
          value: function addCliente() {
            var _this3 = this;

            this.ClienteForm.get('almacenes').setValue(this.almacenes);

            if (this.ClienteForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Oops!',
                text: 'Debes rellenar todos los campos para continuar',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
              });
              return;
            }

            this.api.PostClientes(this.ClienteForm.value).subscribe(function (resp) {
              _this3.obtenerClientes();

              _this3.ClienteForm.reset();

              _this3.NUEVO_CLIENTE = false;
              _this3.almacenes = [];
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Excelente!',
                text: 'Se registro nuevo cliente',
                showConfirmButton: false,
                icon: 'success',
                timer: 2000
              });
            });
          } //--------------------- PRODUCTOS----

        }, {
          key: "obtenerMateriales",
          value: function obtenerMateriales() {
            var _this4 = this;

            this.api.getAlmacen().subscribe(function (resp) {
              _this4.MATERIALES = resp.materiales;
              console.log(_this4.MATERIALES);
            });
          }
        }, {
          key: "obtenerGrupos",
          value: function obtenerGrupos() {
            var _this5 = this;

            this.api.getGrupos().subscribe(function (resp) {
              _this5.GRUPOS = resp.grupos;
              console.log(_this5.GRUPOS, 'GRUPOOOOS');
            });
          }
        }, {
          key: "Ordenar_Producto",
          value: function Ordenar_Producto() {
            var valor = document.getElementById('material_Necesario').value;
            var inde = this.MATERIALES_NECESARIOS.includes(valor);

            if (!inde) {
              this.MATERIALES_NECESARIOS.push(valor);
            }
          }
        }, {
          key: "BuscarGruposEnAlmacen",
          value: function BuscarGruposEnAlmacen() {
            var _this6 = this;

            this.api.GetGrupoMp().subscribe(function (resp) {
              _this6.SECCIONES = resp;
              alert('THIS IS WORKING');
              console.log(_this6.SECCIONES, 'SECCIONEEEES');
            });
          }
        }, {
          key: "finalizar",
          value: function finalizar() {
            var _this7 = this;

            // let name = (<HTMLInputElement>document.getElementById('sustrato_name')).value
            // let marca = (<HTMLInputElement>document.getElementById('sustrato_marca')).value
            // let gramaje = (<HTMLInputElement>document.getElementById('sustrato_gramaje')).value
            // let calibre = (<HTMLInputElement>document.getElementById('sustrato_calibre')).value
            // let sustrato = {
            //   nombre:name,
            //   marca,
            //   gramaje,
            //   calibre
            // }
            var data = {
              cliente: document.getElementById('cliente_Seleccionado').value,
              producto: document.getElementById('nombre_nuevo_producto').value,
              grupo: document.getElementById('grupo_producto').value,
              cod_cliente: document.getElementById('cod_cliente').value,
              materiales: this.MATERIALES_NECESARIOS,
              post: this.POST,
              ejemplares: this.EJEMPLARES,
              // sustrato: sustrato,
              codigo: document.getElementById('cod_producto').value,
              version: document.getElementById('version').value,
              edicion: document.getElementById('edicion').value,
              montajes: this.montajes
            };
            this.api.postProducto(data).subscribe(function (resp) {
              _this7.Modal_Producto();

              var cliente_id = document.getElementById('cliente_Seleccionado').value;

              _this7.buscar_producto(cliente_id);
            });
          }
        }, {
          key: "ancho",
          value: function ancho(e) {
            var ancho = e.target.value;
            this.dimensiones.push(ancho);
            var tamano = this.dimensiones.length;
            var largo = document.getElementById('largo');
            var DirFibra = document.getElementById('d_fibra');
            largo.disabled = false;

            if (ancho == '') {
              this.dimensiones = [];
              largo.value = '';
              largo.disabled = true;
              DirFibra.disabled = true;
            }

            if (largo.value != '') {
              DirFibra.disabled = false;
            }
          }
        }, {
          key: "largo",
          value: function largo(e) {
            var largo = e.target.value;
            var tamano = this.dimensiones.length;
            var DirFibra = document.getElementById('d_fibra');

            if (largo == '') {
              this.dimensiones.pop();
              DirFibra.disabled = true;
            }

            if (largo != '') {
              if (tamano > 1) {
                this.dimensiones.pop();
              }

              this.dimensiones.push(largo);
              DirFibra.disabled = false;
            } // }else{
            //   DirFibra.disabled = false;
            // }

          }
        }, {
          key: "buscar_producto",
          value: function buscar_producto(e) {
            var _this8 = this;

            this.api.getById(e).subscribe(function (resp) {
              _this8.PRODUCTOS = resp.productos;
              console.log(_this8.PRODUCTOS);
            });

            if (e == "") {
              document.getElementById('NP_button').disabled = true;
            } else {
              document.getElementById('NP_button').disabled = false;
            }
          } // sustratos(e){
          //   this.SUSTRATO = [];
          //   this.SUSTRATO.push(e.target.value);
          //   this.Sus_Done = true;
          // }

        }, {
          key: "NuevoSustrato",
          value: function NuevoSustrato() {
            this.SUSTRATO = [];
            this.Sus_Done = false;
          }
        }, {
          key: "add_materia2",
          value: function add_materia2(producto, cantidad) {
            var i = this.i_montajes.toString();
            producto = document.getElementById(i).value;
            cantidad = document.getElementById("cantidad".concat(this.i_montajes)).value;
            var Material = this.MATERIALES.find(function (x) {
              return x._id === producto;
            });
            console.log(Material, '--');
            var size = cantidad;
            var name = Material.nombre;

            if (this.product_selected == "Sustrato") {
              size = '0';
            }

            if (Material.ancho) {
              name = "".concat(Material.nombre, " (").concat(Material.ancho, " x ").concat(Material.largo, ")");
            }

            var productos = {
              material: name,
              marca: Material.marca,
              producto: producto,
              cantidad: size
            };
            console.log(productos);
            this.OneProduct.materiales[this.i_montajes].push(productos);
            console.log(this.MATERIALES_NECESARIOS, 'this'); // this.MATERIALES_NECESARIOS.push(productos);
            // let field_material = (<HTMLInputElement>document.getElementById('field_material'))
            // let field_marca = (<HTMLInputElement>document.getElementById('field_marca'))
            // let field_cantidad = (<HTMLInputElement>document.getElementById('field_cantidad'))
            // let new_material = {
            //   material:material.value,
            //   marca:marca.value,
            //   cantidad:cantidad.value
            // }
            // this.MATERIALES_NECESARIOS.push(new_material)
            // field_cantidad.value = '';
            // field_marca.value = '';
            // field_material.value = '';
          }
        }, {
          key: "add_materia3",
          value: function add_materia3(producto, cantidad) {
            var _this9 = this;

            var i = this.i_montajes.toString();
            producto = document.getElementById("x-".concat(i)).value;
            cantidad = document.getElementById("xcantidad".concat(this.i_montajes)).value;
            var Material = this.MATERIALES.find(function (x) {
              return x._id == producto;
            });
            console.log(Material, '--');
            var size = cantidad;
            var name = Material.nombre;

            if (this.product_selected == "Sustrato") {
              size = '0';
            }

            if (Material.ancho) {
              name = "".concat(Material.producto.nombre, " (").concat(Material.producto.ancho, " x ").concat(Material.producto.largo, ")");
            }

            var productos = {
              material: name,
              marca: Material.marca,
              producto: producto,
              cantidad: size
            };
            this.OneProduct.materiales[this.i_montajes].push(productos);
            this.api.updateProducto(this.OneProduct, this.OneProduct._id).subscribe(function (resp) {
              console.log(resp, 'respuesta');

              _this9.editar(_this9.OneProduct);

              _this9.api.getOneById(_this9.OneProduct._id).subscribe(function (resp) {
                console.log('ok');
              });

              _this9.Modal_Producto_E();

              _this9.Modal_Producto_E();
            }); // this.verProducto(producto)
          }
        }, {
          key: "add_materia",
          value: function add_materia(producto, cantidad) {
            var i = this.i_montajes.toString();
            producto = document.getElementById(i).value;
            cantidad = document.getElementById("cantidad".concat(this.i_montajes)).value;
            var Material = this.MATERIALES.find(function (x) {
              return x._id === producto;
            });
            console.log(Material, '--');
            var size = cantidad;
            var name = Material.nombre;

            if (this.product_selected == "Sustrato") {
              size = '0';
            }

            if (Material.ancho) {
              name = "".concat(Material.nombre, " (").concat(Material.ancho, " x ").concat(Material.largo, ")");
            }

            var productos = {
              material: name,
              marca: Material.marca,
              producto: producto,
              cantidad: size
            };
            console.log(productos);

            if (!this.MATERIALES_NECESARIOS[this.i_montajes]) {
              this.MATERIALES_NECESARIOS[this.i_montajes] = [];
            }

            this.MATERIALES_NECESARIOS[this.i_montajes].push(productos);
            console.log(this.MATERIALES_NECESARIOS, 'this'); // this.MATERIALES_NECESARIOS.push(productos);
            // let field_material = (<HTMLInputElement>document.getElementById('field_material'))
            // let field_marca = (<HTMLInputElement>document.getElementById('field_marca'))
            // let field_cantidad = (<HTMLInputElement>document.getElementById('field_cantidad'))
            // let new_material = {
            //   material:material.value,
            //   marca:marca.value,
            //   cantidad:cantidad.value
            // }
            // this.MATERIALES_NECESARIOS.push(new_material)
            // field_cantidad.value = '';
            // field_marca.value = '';
            // field_material.value = '';
          }
        }, {
          key: "Delete_Material",
          value: function Delete_Material(material2) {
            var deleted = this.MATERIALES_NECESARIOS[this.i_montajes].findIndex(function (x) {
              return x.material == material2;
            });
            console.log(deleted);
            this.MATERIALES_NECESARIOS.splice(deleted, 1);
          }
        }, {
          key: "Delete_Material2",
          value: function Delete_Material2(material2) {
            console.log(this.OneProduct.materiales[this.i_montajes]);
            var deleted = this.OneProduct.materiales[this.i_montajes].findIndex(function (x) {
              return x.producto.nombre == material2;
            });
            console.log(deleted);
            this.OneProduct.materiales[this.i_montajes].splice(deleted, 1); // let deleted = this.OneProduct.materiales[this.i_montajes].producto.findIndex(x => x.nombre == material2)
            // console.log(deleted)
            // this.MATERIALES_NECESARIOS.splice(deleted, 1);
          }
        }, {
          key: "borrarPost",
          value: function borrarPost(post) {
            var i = this.POST.indexOf(post);
            this.POST.splice(i, 1);
          }
        }, {
          key: "borrarPost2",
          value: function borrarPost2(post) {
            var i = this.OneProduct.post.indexOf(post);
            console.log(i);
            this.POST.splice(i, 1);
          }
        }, {
          key: "editar_producto",
          value: function editar_producto() {
            var _this10 = this;

            this.api.updateProducto(this.OneProduct, this.OneProduct._id).subscribe(function (resp) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Producto editado con exito!',
                icon: 'success',
                showConfirmButton: false
              });

              _this10.editar(_this10.OneProduct);

              _this10.buscar_producto(_this10.OneProduct.cliente._id);

              _this10.Modal_Producto_E();
            });
          }
        }, {
          key: "verProducto",
          value: function verProducto(producto) {
            var _this11 = this;

            this.api.getOneById(producto).subscribe(function (resp) {
              _this11.OneProduct = resp.producto;
              console.log('AQUIIIIIIIIIIIIII', _this11.OneProduct);

              _this11.ver_Modal_Producto();
            });
          }
        }, {
          key: "Modal_Producto_E",
          value: function Modal_Producto_E() {
            if (this.EDITAR_PRODUCTO) {
              this.EDITAR_PRODUCTO = false;
            } else {
              this.EDITAR_PRODUCTO = true;
              this.EDITAR_PRODUCTO = false;

              if (this.OneProduct.materiales[this.i_montajes_].length > 0) {
                this.EDITAR_PRODUCTO = true;
              }
            }
          }
        }, {
          key: "editar",
          value: function editar(producto) {
            var _this12 = this;

            this.api.getOneById(producto).subscribe(function (resp) {
              _this12.OneProduct = resp.producto;
              console.log('AQUIIIIIIIIIIIIII', _this12.OneProduct);
            });

            if (this.OneProduct) {
              this.Modal_Producto_E();
            }
          }
        }]);

        return ProductosComponent;
      }();

      ProductosComponent.??fac = function ProductosComponent_Factory(t) {
        return new (t || ProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ProductosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductosComponent,
        selectors: [["app-productos"]],
        decls: 380,
        vars: 63,
        consts: [[1, "columns", "mt-5"], [1, "column", "is-3"], [1, "card"], [1, "card-content"], [1, "field"], [1, "label"], [1, "control"], [1, "select"], ["id", "cliente_Seleccionado", "value", "", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "button is-primary", 3, "click", 4, "ngIf"], [1, "column"], [1, "titulo"], ["class", "button is-primary", "disabled", "", "id", "NP_button", 3, "click", 4, "ngIf"], [1, "table", "is-fullwidth"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "subtitulo"], [1, "columns"], ["type", "text", "formControlName", "nombre", 1, "input"], ["type", "text", "formControlName", "codigo", 1, "input"], [4, "ngFor", "ngForOf", "ngForFrom"], ["type", "text", "id", "almacen_nuevo", "formControlName", "almacenes", "name", "nuevoAlmacen", 1, "input", 3, "ngModel", "ngModelChange"], [1, "button", "is-success", "is-outlined", 3, "disabled", "click"], [1, "button", "is-primary"], [1, "modal-card-body", "tabla"], [1, "separador"], ["type", "text", "id", "nombre_nuevo_producto", "placeholder", "Nombre Producto", 1, "input"], ["id", "grupo_producto"], ["type", "text", "id", "cod_producto", "placeholder", "C\xF3digo de producto", 1, "input"], ["type", "text", "id", "version", "placeholder", "Versi\xF3n", 1, "input"], ["type", "text", "id", "edicion", "placeholder", "Especificaci\xF3n", 1, "input"], ["type", "text", "placeholder", "C\xF3digo de producto de cliente", "id", "cod_cliente", 1, "input"], ["type", "checkbox", "name", "troquelado", "id", "troquelado", 3, "click"], ["type", "checkbox", "name", "pegado", "id", "pegado", 3, "click"], ["type", "checkbox", "name", "corte", "id", "corte", 3, "click"], [1, "columns", "is-3"], ["for", "", 1, "label"], [1, "column", "is-4"], ["type", "number", "min", "1", "max", "5", "placeholder", "Cantidad de montajes", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "montajes", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Ejemplares montados", 1, "input", 3, "ngModel", "change", "ngModelChange"], ["class", "materiales", 4, "ngFor", "ngForOf"], [1, "button", "is-primary", 3, "click"], [1, "table"], ["id", "", "name", "montaje", 1, "select", 3, "ngModel", "click", "ngModelChange"], ["tr", "", 4, "ngFor", "ngForOf"], [1, "table", "is-bordered"], ["type", "text", "id", "nombre_nuevo_producto", "placeholder", "Nombre Producto", 1, "input", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], ["type", "text", "id", "cod_producto", "placeholder", "C\xF3digo de producto", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "version", "placeholder", "Versi\xF3n", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "edicion", "placeholder", "Especificaci\xF3n", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "C\xF3digo de producto de cliente", "id", "cod_cliente", 1, "input", 3, "ngModel", "ngModelChange"], [3, "value"], ["disabled", "", "id", "NP_button", 1, "button", "is-primary", 3, "click"], [1, "icon", 3, "click"], [1, "fas", "fa-times"], [1, "materiales"], ["class", "table is-fullwidth", 4, "ngIf"], ["class", "columns", 4, "ngIf"], ["class", "field", 4, "ngIf"], [1, "button", "is-danger", "is-outlined", "is-small", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-check"], ["name", "", "id", "", 3, "change"], ["value", "0"], ["name", "", "disabled", "", 3, "id", "change"], ["producto", ""], ["id", "cant", 1, "field"], ["type", "text", 1, "input", 3, "id", "disabled"], ["size", ""], [1, "button", "is-success", "is-outlined", 3, "click"], ["tr", ""], [3, "ngModel", "ngModelChange"]],
        template: function ProductosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Cliente:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_Template_select_change_9_listener($event) {
              return ctx.buscar_producto($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Seleccionar Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductosComponent_option_12_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductosComponent_button_13_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductosComponent_button_19_Template, 2, 0, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Especificaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Nombre del Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Ver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ProductosComponent_th_30_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ProductosComponent_tr_32_Template, 9, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_div_click_34_listener() {
              return ctx.Modal_Cliente();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ProductosComponent_Template_form_ngSubmit_37_listener() {
              return ctx.addCliente();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Nuevo Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Nombre del Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "C\xF3d. Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Nombre de almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ProductosComponent_tr_59_Template, 5, 1, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.new_almacen = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_button_click_66_listener() {
              return ctx.add_almacen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Agregar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Nuevo Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_div_click_72_listener() {
              return ctx.Modal_Producto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Nuevo Producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Informaci\xF3n del producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Nombre Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Categoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](94, ProductosComponent_option_94_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Cod. Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Versi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Especificaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "C\xF3digo de producto de cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_122_listener() {
              return ctx.post_impresion("Troquelado");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Troquelado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_126_listener() {
              return ctx.post_impresion("Pegado");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " Pegado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_130_listener() {
              return ctx.post_impresion("Corte Recto");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " Corte Recto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Pre Impresi\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Cantidad de montajes:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_145_listener($event) {
              return ctx.montajes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Montaje:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "select", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_select_ngModelChange_155_listener($event) {
              return ctx.i_montajes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](156, ProductosComponent_option_156_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " Materia Prima - Montaje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Ejemplares montados:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_Template_input_change_170_listener($event) {
              return ctx.Ejemplar($event.target.value);
            })("ngModelChange", function ProductosComponent_Template_input_ngModelChange_170_listener($event) {
              return ctx.EJEMPLARES[ctx.i_montajes] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](172, ProductosComponent_div_172_Template, 5, 4, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_button_click_174_listener() {
              return ctx.finalizar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Registrar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_div_click_177_listener() {
              return ctx.ver_Modal_Producto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](181, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "table", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " Especificaci\xF3n del Producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " Identificacion del Producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Cliente:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Producto:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "C\xF3digo del producto:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Montaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_select_click_213_listener() {
              return ctx.cambiarCalculo();
            })("ngModelChange", function ProductosComponent_Template_select_ngModelChange_213_listener($event) {
              return ctx.i_montajes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](214, ProductosComponent_option_214_Template, 2, 5, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, " Materia Prima ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " Sustrato ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](223, ProductosComponent_tr_223_Template, 2, 1, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " Colores Aprobados: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, " Tintas (Marca): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](231, ProductosComponent_tr_231_Template, 2, 1, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " Barniz aprobado ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](237, ProductosComponent_tr_237_Template, 2, 1, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " Pre impresion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, " C\xF3digo de peliculas: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](246, ProductosComponent_ng_container_246_Template, 2, 1, "ng-container", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Impresi\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Tama\xF1o de Impresi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Ejemplares montados");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "table", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Ancho");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Largo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](265, ProductosComponent_tr_265_Template, 2, 1, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " Post Impresi\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](273, ProductosComponent_ng_container_273_Template, 3, 2, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](275, ProductosComponent_ng_container_275_Template, 3, 2, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_div_click_277_listener() {
              return ctx.Modal_Producto_E();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, " Editar Producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, " Informaci\xF3n del producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](284, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Nombre Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_291_listener($event) {
              return ctx.OneProduct.producto = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Categoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](299, ProductosComponent_option_299_Template, 2, 2, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Cod. Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_305_listener($event) {
              return ctx.OneProduct.codigo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Versi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_312_listener($event) {
              return ctx.OneProduct.version = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Especificaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_318_listener($event) {
              return ctx.OneProduct.edicion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "C\xF3digo de producto de cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_325_listener($event) {
              return ctx.OneProduct.cod_cliente = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_327_listener() {
              return ctx.post_impresion("Troquelado");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " Troquelado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_331_listener() {
              return ctx.post_impresion("Pegado");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " Pegado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_input_click_335_listener() {
              return ctx.post_impresion("Corte Recto");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, " Corte Recto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](338, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " Pre Impresi\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](341, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "Cantidad de montajes:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_350_listener($event) {
              return ctx.OneProduct.montajes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "Montaje:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "select", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductosComponent_Template_select_ngModelChange_360_listener($event) {
              return ctx.i_montajes_ = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](361, ProductosComponent_option_361_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, " Materia Prima - Montaje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Ejemplares montados:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductosComponent_Template_input_change_374_listener($event) {
              return ctx.Ejemplar($event.target.value);
            })("ngModelChange", function ProductosComponent_Template_input_ngModelChange_374_listener($event) {
              return ctx.OneProduct.ejemplares[ctx.i_montajes_] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](375, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](376, ProductosComponent_div_376_Template, 5, 4, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](377, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductosComponent_Template_button_click_378_listener() {
              return ctx.editar_producto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "Editar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.CLIENTES);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](50, _c0, ctx.NUEVO_CLIENTE));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.ClienteForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.almacenes)("ngForFrom", ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.new_almacen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.new_almacen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](52, _c0, ctx.NUEVO_PRODUCTO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.GRUPOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.montajes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.i_montajes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](54, _c1).constructor(ctx.montajes));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.EJEMPLARES[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](55, _c1).constructor(ctx.montajes));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](56, _c0, ctx.VER_PRODUCTO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"]("\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0E-", ctx.OneProduct.cliente.codigo, "-", ctx.OneProduct.codigo, "-", ctx.OneProduct.version, "-", ctx.OneProduct.edicion, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.OneProduct.cliente.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.OneProduct.producto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", ctx.OneProduct.cliente.codigo, "-", ctx.OneProduct.codigo, "-", ctx.OneProduct.version, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.i_montajes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](58, _c1).constructor(ctx.OneProduct.montajes));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.OneProduct.ejemplares[ctx.i_montajes], " Ejemplares ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.OneProduct.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c0, ctx.EDITAR_PRODUCTO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.producto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.GRUPOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.codigo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.version);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.edicion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.cod_cliente);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.montajes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.i_montajes_);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](61, _c1).constructor(ctx.OneProduct.montajes));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.OneProduct.ejemplares[ctx.i_montajes_]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](62, _c1).constructor(ctx.OneProduct.montajes));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n\r\n.tabla[_ngcontent-%COMP%]{\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.separador[_ngcontent-%COMP%]{\r\n    display: block;\r\n    background-color: black;\r\n    border-radius: 5px;\r\n    color: white;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    color: rgb(196, 194, 194);\r\n    display: block;\r\n    float: right;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8teW1hcXVpbmFyaWEvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by15bWFxdWluYXJpYS9wcm9kdWN0b3MvcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvUm9ib3RvL1JvYm90by1CbGFjay50dGYpO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG4uc3VidGl0dWxve1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsYXtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3J7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgY29sb3I6IHJnYigxOTYsIDE5NCwgMTk0KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5pY29uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-productos',
            templateUrl: './productos.component.html',
            styleUrls: ['./productos.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/r05":
    /*!*************************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/maquinaria/maquinaria.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MaquinariaComponent */

    /***/
    function r05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaquinariaComponent", function () {
        return MaquinariaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MaquinariaComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.Modal_Maquina();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nueva Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaquinariaComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Modificar Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaquinariaComponent_tr_20_td_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_tr_20_td_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var maquina_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.BorrarMaquina_(maquina_r11._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Borrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_tr_20_td_9_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var maquina_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.EditarMaquina(maquina_r11._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaquinariaComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MaquinariaComponent_tr_20_td_9_Template, 12, 0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var maquina_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](maquina_r11.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](maquina_r11.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](maquina_r11.colores);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](maquina_r11.cph);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.usuario.Maquinaria == 2);
        }
      }

      function MaquinariaComponent_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.Modal_Grupo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nuevo Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaquinariaComponent_th_30_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_th_30_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var grupo_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.EliminarGrupo_(grupo_r20._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaquinariaComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MaquinariaComponent_th_30_button_2_Template, 3, 0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var grupo_r20 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", grupo_r20.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.usuario.Maquinaria == 2);
        }
      }

      function MaquinariaComponent_td_32_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tipo_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tipo_r27, " ");
        }
      }

      function MaquinariaComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MaquinariaComponent_td_32_li_2_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var grupo_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", grupo_r25.tipos);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      function MaquinariaComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_div_33_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.Edicion_Modal_Maquina();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Registrar Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaquinariaComponent_div_33_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.MaquinaID.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Funcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaquinariaComponent_div_33_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.MaquinaID.tipo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Colores (Opcional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaquinariaComponent_div_33_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.MaquinaID.colores = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Trabajo por Hora");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaquinariaComponent_div_33_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r34.MaquinaID.cph = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_div_33_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.Finalizar_Edicion_M();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Editar Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx_r6.EDITAR_MAQUINA));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.MaquinaID.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.MaquinaID.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.MaquinaID.colores);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.MaquinaID.cph);
        }
      }

      function MaquinariaComponent_option_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tipo_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", tipo_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tipo_r36);
        }
      }

      function MaquinariaComponent_tr_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fase_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fase_r37);
        }
      }

      var MaquinariaComponent = /*#__PURE__*/function () {
        function MaquinariaComponent(fb, api) {
          _classCallCheck(this, MaquinariaComponent);

          this.fb = fb;
          this.api = api;
          this.NUEVA_MAQUINA = false;
          this.NUEVO_GRUPO = false;
          this.MAQUINAS = [];
          this.FUNCIONES = [];
          this.FASES = [];
          this.GRUPOS = [];
          this.EDITAR_MAQUINA = false;
          this.maquinaForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            colores: [''],
            cph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.usuario = api.usuario;
        }

        _createClass(MaquinariaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ObtenerMaquinas();
            this.obtenerGrupos();
          }
        }, {
          key: "Modal_Maquina",
          value: function Modal_Maquina() {
            if (this.NUEVA_MAQUINA) {
              this.NUEVA_MAQUINA = false;
            } else {
              this.NUEVA_MAQUINA = true;
            }
          }
        }, {
          key: "Edicion_Modal_Maquina",
          value: function Edicion_Modal_Maquina() {
            if (this.EDITAR_MAQUINA) {
              this.EDITAR_MAQUINA = false;
            } else {
              this.EDITAR_MAQUINA = true;
            }
          }
        }, {
          key: "EditarMaquina",
          value: function EditarMaquina(id) {
            var _this13 = this;

            this.Edicion_Modal_Maquina();
            this.api.getMaquinaID(id).subscribe(function (resp) {
              _this13.MaquinaID = resp;
            });
          }
        }, {
          key: "Finalizar_Edicion_M",
          value: function Finalizar_Edicion_M() {
            var _this14 = this;

            this.MaquinaID.tipo = this.MaquinaID.tipo.toUpperCase();
            this.api.putMaquina(this.MaquinaID._id, this.MaquinaID).subscribe(function (resp) {
              _this14.ObtenerMaquinas();

              _this14.Edicion_Modal_Maquina();

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Edici??n realizada con exito',
                showConfirmButton: false,
                timer: 1500
              });
            });
          }
        }, {
          key: "nuevaMaquina",
          value: function nuevaMaquina() {
            var _this15 = this;

            this.api.PostMaquinas(this.maquinaForm.value).subscribe(function (resp) {
              _this15.maquinaForm.reset();

              _this15.NUEVA_MAQUINA = false;

              _this15.ObtenerMaquinas();
            });
          }
        }, {
          key: "ObtenerMaquinas",
          value: function ObtenerMaquinas() {
            var _this16 = this;

            this.api.GetMaquinas().subscribe(function (maquinas) {
              _this16.MAQUINAS = maquinas;

              _this16.obtenerTipos();
            });
          }
        }, {
          key: "BorrarMaquina_",
          value: function BorrarMaquina_(id) {
            var _this17 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: '??Estas Seguro?',
              text: 'No podras revertir esta acci??n',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Si, Eliminar!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this17.BorrarMaquina(id);

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Esta maquina ha sido eliminada',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
          }
        }, {
          key: "EliminarGrupo_",
          value: function EliminarGrupo_(id) {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: '??Estas Seguro?',
              text: 'La eliminaci??n de grupos afecta de manera negativa si ya existen productos creados en el sistema',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Si, Eliminar!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this18.EliminarGrupo(id);

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Este grupo ha sido eliminado',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
          }
        }, {
          key: "EliminarGrupo",
          value: function EliminarGrupo(id) {
            var _this19 = this;

            this.api.deleteGrupo(id).subscribe(function (resp) {
              _this19.obtenerGrupos();
            });
          }
        }, {
          key: "BorrarMaquina",
          value: function BorrarMaquina(id) {
            var _this20 = this;

            this.api.DeleteMaquinas(id).subscribe(function (resp) {
              _this20.ObtenerMaquinas();
            });
          } // ----------------------GRUPOS -------------

        }, {
          key: "Modal_Grupo",
          value: function Modal_Grupo() {
            if (this.NUEVO_GRUPO) {
              this.NUEVO_GRUPO = false;
            } else {
              this.NUEVO_GRUPO = true;
            }
          }
        }, {
          key: "obtenerTipos",
          value: function obtenerTipos() {
            var x = this.MAQUINAS.length;

            for (var i = 0; i < x; i++) {
              var inde = this.FUNCIONES.includes(this.MAQUINAS[i].tipo);

              if (!inde) {
                this.FUNCIONES.push(this.MAQUINAS[i].tipo);
              }
            }
          }
        }, {
          key: "agregarTipo",
          value: function agregarTipo() {
            var este = document.getElementById('tipos').value;
            var inde = this.FASES.includes(este);

            if (!inde) {
              this.FASES.push(este);
            }
          }
        }, {
          key: "obtenerGrupos",
          value: function obtenerGrupos() {
            var _this21 = this;

            this.api.getGrupos().subscribe(function (resp) {
              _this21.GRUPOS = resp.grupos;
            });
          }
        }, {
          key: "nuevoTipo",
          value: function nuevoTipo() {
            var _this22 = this;

            var name = document.getElementById('name').value;
            var nuevoTipo = {
              nombre: name,
              tipos: this.FASES
            }; // AGREGAR A LA BASE DE DATOS****************

            this.api.PostGrupos(nuevoTipo).subscribe(function (resp) {
              _this22.obtenerGrupos();

              _this22.NUEVO_GRUPO = false;
            });
          }
        }]);

        return MaquinariaComponent;
      }();

      MaquinariaComponent.??fac = function MaquinariaComponent_Factory(t) {
        return new (t || MaquinariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]));
      };

      MaquinariaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MaquinariaComponent,
        selectors: [["app-maquinaria"]],
        decls: 94,
        vars: 16,
        consts: [[1, "container", "mt-5"], [1, "card"], [1, "card-content"], [1, "titulo"], ["class", "button is-primary", 3, "click", 4, "ngIf"], [1, "table", "is-fullwidth"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "card", "mt-5"], [1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "subtitulo"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "formControlName", "nombre", 1, "input"], ["type", "text", "formControlName", "tipo", 1, "input"], ["type", "number", "min", "0", "formControlName", "colores", 1, "input"], ["type", "number", "min", "0", "formControlName", "cph", 1, "input"], [1, "button", "is-primary"], ["type", "text", "id", "name", 1, "input"], [1, "select"], ["id", "tipos", "value", "IMPRESION", 3, "click"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button", "is-primary", 3, "click"], [1, "button", "is-danger", "is-outlined", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-times"], [1, "button", "is-success", "is-outlined", 3, "click"], [1, "far", "fa-edit"], ["class", "button is-danger is-small is-outlined", 3, "click", 4, "ngIf"], [1, "button", "is-danger", "is-small", "is-outlined", 3, "click"], ["type", "text", "name", "nombre", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "tipo", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "name", "colores", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "name", "cph", 1, "input", 3, "ngModel", "ngModelChange"], [3, "value"]],
        template: function MaquinariaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Maquinaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MaquinariaComponent_button_5_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Nombre Maquina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Funci\xF3n de Maquina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Cantidad de Colores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Trabajos por Hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, MaquinariaComponent_th_18_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, MaquinariaComponent_tr_20_Template, 10, 5, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Grupo de Productos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, MaquinariaComponent_button_25_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, MaquinariaComponent_th_30_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, MaquinariaComponent_td_32_Template, 3, 1, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, MaquinariaComponent_div_33_Template, 30, 7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_Template_div_click_35_listener() {
              return ctx.Modal_Maquina();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function MaquinariaComponent_Template_form_ngSubmit_38_listener() {
              return ctx.nuevaMaquina();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Registrar Maquina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Funcion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Colores (Opcional)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Trabajo por Hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Registrar Nueva Maquina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_Template_div_click_65_listener() {
              return ctx.Modal_Grupo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Nuevo Grupo de Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Nombre del Grupo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Fases:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_Template_select_click_81_listener() {
              return ctx.agregarTipo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, MaquinariaComponent_option_82_Template, 2, 2, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "proceso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Eliminar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](91, MaquinariaComponent_tr_91_Template, 6, 1, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MaquinariaComponent_Template_button_click_92_listener() {
              return ctx.nuevoTipo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Registrar Nueva Grupo de Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.MAQUINAS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.GRUPOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.GRUPOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.MaquinaID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, ctx.NUEVA_MAQUINA));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.maquinaForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, ctx.NUEVO_GRUPO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.FUNCIONES);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.FASES);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8teW1hcXVpbmFyaWEvbWFxdWluYXJpYS9tYXF1aW5hcmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvLXltYXF1aW5hcmlhL21hcXVpbmFyaWEvbWFxdWluYXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmKTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuXHJcbi5tdC01e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MaquinariaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-maquinaria',
            templateUrl: './maquinaria.component.html',
            styleUrls: ['./maquinaria.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\administrador\Desktop\New folder\frn\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0hAl":
    /*!***************************************************!*\
      !*** ./src/app/almacen/almacen-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AlmacenRoutingModule */

    /***/
    function hAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlmacenRoutingModule", function () {
        return AlmacenRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _almacen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./almacen.component */
      "RZrN");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "m0jB");

      var routes = [{
        path: '',
        component: _almacen_component__WEBPACK_IMPORTED_MODULE_3__["AlmacenComponent"],
        children: [{
          path: '',
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
        }]
      }];

      var AlmacenRoutingModule = function AlmacenRoutingModule() {
        _classCallCheck(this, AlmacenRoutingModule);
      };

      AlmacenRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AlmacenRoutingModule
      });
      AlmacenRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AlmacenRoutingModule_Factory(t) {
          return new (t || AlmacenRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AlmacenRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlmacenRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "11oC":
    /*!*****************************************!*\
      !*** ./src/app/models/usuario.model.ts ***!
      \*****************************************/

    /*! exports provided: Usuario */

    /***/
    function oC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = function Usuario(estado, _id, Nombre, Apellido, Correo, Departamento, Role, Nueva_orden, Consulta, Almacen, Maquinaria, Planificacion, Gestiones) {
        _classCallCheck(this, Usuario);

        this.estado = estado;
        this._id = _id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Correo = Correo;
        this.Departamento = Departamento;
        this.Role = Role;
        this.Nueva_orden = Nueva_orden;
        this.Consulta = Consulta;
        this.Almacen = Almacen;
        this.Maquinaria = Maquinaria;
        this.Planificacion = Planificacion;
        this.Gestiones = Gestiones;
      };
      /***/

    },

    /***/
    "3ylV":
    /*!*********************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/producto-ymaquinaria.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ProductoYMaquinariaModule */

    /***/
    function ylV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoYMaquinariaModule", function () {
        return ProductoYMaquinariaModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "p4/K");
      /* harmony import */


      var _producto_ymaquinaria_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./producto-ymaquinaria-routing.module */
      "86iG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _maquinaria_maquinaria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maquinaria/maquinaria.component */
      "/r05");
      /* harmony import */


      var _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./productos/productos.component */
      "/Rpu");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductoYMaquinariaModule = function ProductoYMaquinariaModule() {
        _classCallCheck(this, ProductoYMaquinariaModule);
      };

      ProductoYMaquinariaModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProductoYMaquinariaModule
      });
      ProductoYMaquinariaModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProductoYMaquinariaModule_Factory(t) {
          return new (t || ProductoYMaquinariaModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _producto_ymaquinaria_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductoYMaquinariaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductoYMaquinariaModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _maquinaria_maquinaria_component__WEBPACK_IMPORTED_MODULE_5__["MaquinariaComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__["ProductosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _producto_ymaquinaria_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductoYMaquinariaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoYMaquinariaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _maquinaria_maquinaria_component__WEBPACK_IMPORTED_MODULE_5__["MaquinariaComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__["ProductosComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _producto_ymaquinaria_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductoYMaquinariaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "86iG":
    /*!*****************************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/producto-ymaquinaria-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProductoYMaquinariaRoutingModule */

    /***/
    function iG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoYMaquinariaRoutingModule", function () {
        return ProductoYMaquinariaRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _producto_ymaquinaria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./producto-ymaquinaria.component */
      "DDDj");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "p4/K");
      /* harmony import */


      var _maquinaria_maquinaria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maquinaria/maquinaria.component */
      "/r05");
      /* harmony import */


      var _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./productos/productos.component */
      "/Rpu");

      var routes = [{
        path: '',
        component: _producto_ymaquinaria_component__WEBPACK_IMPORTED_MODULE_3__["ProductoYMaquinariaComponent"],
        children: [{
          path: '',
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
        }, {
          path: 'maquinaria',
          component: _maquinaria_maquinaria_component__WEBPACK_IMPORTED_MODULE_5__["MaquinariaComponent"]
        }, {
          path: 'productos',
          component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__["ProductosComponent"]
        }]
      }];

      var ProductoYMaquinariaRoutingModule = function ProductoYMaquinariaRoutingModule() {
        _classCallCheck(this, ProductoYMaquinariaRoutingModule);
      };

      ProductoYMaquinariaRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProductoYMaquinariaRoutingModule
      });
      ProductoYMaquinariaRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProductoYMaquinariaRoutingModule_Factory(t) {
          return new (t || ProductoYMaquinariaRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductoYMaquinariaRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoYMaquinariaRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // api: 'http://127.0.0.1:8080/api'
        api: 'http://192.168.0.23:8080/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DDDj":
    /*!************************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/producto-ymaquinaria.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductoYMaquinariaComponent */

    /***/
    function DDDj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoYMaquinariaComponent", function () {
        return ProductoYMaquinariaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductoYMaquinariaComponent = /*#__PURE__*/function () {
        function ProductoYMaquinariaComponent(api) {
          _classCallCheck(this, ProductoYMaquinariaComponent);

          this.api = api;
          this.usuario = api.usuario;
        }

        _createClass(ProductoYMaquinariaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductoYMaquinariaComponent;
      }();

      ProductoYMaquinariaComponent.??fac = function ProductoYMaquinariaComponent_Factory(t) {
        return new (t || ProductoYMaquinariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]));
      };

      ProductoYMaquinariaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoYMaquinariaComponent,
        selectors: [["app-producto-ymaquinaria"]],
        decls: 2,
        vars: 0,
        template: function ProductoYMaquinariaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvLXltYXF1aW5hcmlhL3Byb2R1Y3RvLXltYXF1aW5hcmlhLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoYMaquinariaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-ymaquinaria',
            templateUrl: './producto-ymaquinaria.component.html',
            styleUrls: ['./producto-ymaquinaria.component.css']
          }]
        }], function () {
          return [{
            type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(usuarioService) {
          _classCallCheck(this, NavbarComponent);

          this.usuarioService = usuarioService;
          this.usuario = usuarioService.usuario;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.usuarioService.logout();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]));
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 11,
        vars: 2,
        consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-primary"], [1, "navbar-brand"], ["routerLink", "", 1, "navbar-item"], ["src", "../../../assets/logo_nav.png", "width", "112", "height", "28"], [1, "navbar-end"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link"], [1, "navbar-dropdown"], [1, "navbar-item", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_9_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cerrar Sesion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.usuario.Nombre, " ", ctx.usuario.Apellido, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G20n":
    /*!*******************************************!*\
      !*** ./src/app/almacen/almacen.module.ts ***!
      \*******************************************/

    /*! exports provided: AlmacenModule */

    /***/
    function G20n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlmacenModule", function () {
        return AlmacenModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "m0jB");
      /* harmony import */


      var _almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./almacen-routing.module */
      "0hAl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AlmacenModule = function AlmacenModule() {
        _classCallCheck(this, AlmacenModule);
      };

      AlmacenModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AlmacenModule
      });
      AlmacenModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AlmacenModule_Factory(t) {
          return new (t || AlmacenModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlmacenRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AlmacenModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlmacenRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlmacenModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlmacenRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "I1LG":
    /*!******************************************!*\
      !*** ./src/app/Auth/auth-guard.guard.ts ***!
      \******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function I1LG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(api, router) {
          _classCallCheck(this, AuthGuard);

          this.api = api;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this23 = this;

            return this.api.validarToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (isAuth) {
              if (!isAuth) {
                _this23.router.navigateByUrl('login');
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IajX":
    /*!***************************************************!*\
      !*** ./src/app/ordenes/ordenes-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: OrdenesRoutingModule */

    /***/
    function IajX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdenesRoutingModule", function () {
        return OrdenesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ordenes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ordenes.component */
      "RFuu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "O4wM");
      /* harmony import */


      var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gestion/gestion.component */
      "JriP");

      var routes = [{
        path: '',
        component: _ordenes_component__WEBPACK_IMPORTED_MODULE_2__["OrdenesComponent"],
        children: [{
          path: '',
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
        }, {
          path: 'gestion',
          component: _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_5__["GestionComponent"]
        }]
      }];

      var OrdenesRoutingModule = function OrdenesRoutingModule() {
        _classCallCheck(this, OrdenesRoutingModule);
      };

      OrdenesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: OrdenesRoutingModule
      });
      OrdenesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function OrdenesRoutingModule_Factory(t) {
          return new (t || OrdenesRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrdenesRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdenesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "JriP":
    /*!******************************************************!*\
      !*** ./src/app/ordenes/gestion/gestion.component.ts ***!
      \******************************************************/

    /*! exports provided: GestionComponent */

    /***/
    function JriP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionComponent", function () {
        return GestionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GestionComponent_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var funcion_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", funcion_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](funcion_r4);
        }
      }

      function GestionComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var trabajo_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.orden.sort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.orden.producto.producto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.maquina.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.orden.paginas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.orden.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r5.fecha);
        }
      }

      function GestionComponent_div_38_ng_container_19_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var gestion_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](gestion_r9.fecha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](gestion_r9.maquina.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](gestion_r9.hojas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](gestion_r9.productos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", gestion_r9.Rhojas, " (Hojas) / ", gestion_r9.Rproductos, " (Productos)");
        }
      }

      function GestionComponent_div_38_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GestionComponent_div_38_ng_container_19_tr_1_Template, 11, 6, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var gestion_r9 = ctx.$implicit;

          var trabajo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", gestion_r9.orden === trabajo_r6._id);
        }
      }

      function GestionComponent_div_38_ng_container_21_ng_container_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GestionComponent_div_38_ng_container_21_ng_container_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var trabajo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.acelerar(trabajo_r6.orden._id, trabajo_r6.maquina, trabajo_r6.fecha, trabajo_r6._id, trabajo_r6.fechaI);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Adelantar Entrega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GestionComponent_div_38_ng_container_21_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GestionComponent_div_38_ng_container_21_ng_container_1_button_1_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var gestion_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", gestion_r14.Rhojas <= 0);
        }
      }

      function GestionComponent_div_38_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GestionComponent_div_38_ng_container_21_ng_container_1_Template, 2, 1, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var gestion_r14 = ctx.$implicit;

          var trabajo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", gestion_r14.orden === trabajo_r6._id);
        }
      }

      function GestionComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ORDEN: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Cant. de Hojas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Cant. de Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Restante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, GestionComponent_div_38_ng_container_19_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, GestionComponent_div_38_ng_container_21_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GestionComponent_div_38_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var trabajo_r6 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.retrasar(trabajo_r6.orden._id, trabajo_r6.maquina, trabajo_r6.fecha, trabajo_r6._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Retrasar entrega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var trabajo_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r6.orden.sort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" - ", trabajo_r6.orden.producto.producto, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.GESTIONES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.GESTIONES);
        }
      }

      function GestionComponent_ng_container_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var trabajo_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", trabajo_r25._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](trabajo_r25.orden.sort);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      var GestionComponent = /*#__PURE__*/function () {
        function GestionComponent(api) {
          _classCallCheck(this, GestionComponent);

          this.api = api;
          this.TRABAJOS = [];
          this.NUEVA_GESTION = false;
          this.FASE = 'IMPRESION';
          this.HOY = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
          this.FASES = [];
          this.FUNCIONES = [];
        }

        _createClass(GestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Tarea();
            this.getMaquinas();
            this.getGestiones();
          }
        }, {
          key: "modal_nueva_gestion",
          value: function modal_nueva_gestion() {
            if (!this.NUEVA_GESTION) {
              this.NUEVA_GESTION = true;
            } else {
              this.NUEVA_GESTION = false;
            }
          }
        }, {
          key: "fase",
          value: function fase(e) {
            this.FASE = e.target.value;
            this.TRABAJOS = [];
            this.Tarea();
          }
        }, {
          key: "getMaquinas",
          value: function getMaquinas() {
            var _this24 = this;

            this.api.GetMaquinas().subscribe(function (resp) {
              _this24.MAQUINAS = resp;

              _this24.obtenerTipos();
            });
          }
        }, {
          key: "obtenerTipos",
          value: function obtenerTipos() {
            var x = this.MAQUINAS.length;

            for (var i = 0; i < x; i++) {
              var inde = this.FUNCIONES.includes(this.MAQUINAS[i].tipo);

              if (!inde) {
                this.FUNCIONES.push(this.MAQUINAS[i].tipo);
              }
            }
          }
        }, {
          key: "calcular_Productos",
          value: function calcular_Productos(e) {
            var value_hojas = e.target.value;
            var orden = document.getElementById('orden_selected').value;
            var Ejemplares = this.TRABAJOS.find(function (x) {
              return x._id == orden;
            });
            var productos = value_hojas * Ejemplares.orden.producto.ejemplares[Ejemplares.orden.montaje];
            console.log(value_hojas, 'value');
            console.log(Ejemplares, 'Ejemplares');
            document.getElementById('productos_input').value = productos;
          }
        }, {
          key: "calcular_Hojas",
          value: function calcular_Hojas(e) {
            var value_productos = e.target.value;
            var orden = document.getElementById('orden_selected').value;
            var Ejemplares = this.TRABAJOS.find(function (x) {
              return x._id == orden;
            });
            var productos = value_productos / Ejemplares.orden.producto.ejemplares;
            document.getElementById('hojas_input').value = productos;
          }
        }, {
          key: "retrasar",
          value: function retrasar(orden, maquina, fecha, trabajo) {
            var _this25 = this;

            var data = {
              orden: orden,
              maquina: maquina,
              fecha: fecha,
              trabajo: trabajo
            };
            this.api.postRestrasar(data).subscribe(function (resp) {
              console.log(resp);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'info',
                title: 'Se realiz?? un retraso en la planificaci??n',
                text: 'se agreg?? 1 dia mas a esta gesti??n y a todas las ordenes que utilicen estos mismos equipos'
              });
              _this25.TRABAJOS = [];

              _this25.Tarea();

              _this25.getMaquinas();

              _this25.getGestiones();
            });
          }
        }, {
          key: "acelerar",
          value: function acelerar(orden, maquina, fecha, trabajo, fechaI) {
            var _this26 = this;

            var fecha_lapsos = moment__WEBPACK_IMPORTED_MODULE_1__(fecha);
            var fechaI_lapso = moment__WEBPACK_IMPORTED_MODULE_1__(fechaI);
            var lapso = fecha_lapsos.diff(fechaI_lapso, 'days');

            if (lapso < 1) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                text: 'Esta gesti??n termina hoy'
              });
              return;
            }

            var data = {
              orden: orden,
              maquina: maquina,
              fecha: fecha,
              trabajo: trabajo
            };
            this.api.postAcelerar(data).subscribe(function (resp) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'success',
                title: 'Fue adelantada la planificaci??n',
                text: 'se adelant?? 1 dia mas a esta gesti??n y a todas las ordenes que utilizen estos mismos equipos'
              });
              _this26.TRABAJOS = [];

              _this26.Tarea();

              _this26.getMaquinas();

              _this26.getGestiones();
            });
          }
        }, {
          key: "finalizar",
          value: function finalizar() {
            var _this27 = this;

            var hoy = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
            var orden = '';
            var productos = '';
            var hojas = '';
            orden = document.getElementById('orden_selected').value;
            var Ejemplares = this.TRABAJOS.find(function (x) {
              return x._id == orden;
            });
            productos = document.getElementById('productos_input').value;
            hojas = document.getElementById('hojas_input').value;
            var restante = this.GESTIONES.filter(function (x) {
              return x.orden == orden;
            });
            var _long = restante.length;
            var _productos = 0;
            var _hojas = 0;

            if (_long <= 0) {
              console.log(orden);
              var Actual = this.TRABAJOS.find(function (x) {
                return x._id == orden;
              });
              console.log(Actual);
              _productos = Actual.orden.cantidad - Number(productos);
              _hojas = Actual.orden.paginas - Number(hojas);
            } else {
              _productos = restante[_long - 1].Rproductos - Number(productos);
              _hojas = restante[_long - 1].Rhojas - Number(hojas);
            }

            var data = {
              orden: orden,
              fecha: hoy,
              maquina: Ejemplares.maquina._id,
              productos: productos,
              hojas: hojas,
              Rproductos: _productos,
              Rhojas: _hojas
            };
            this.api.postGestion(data).subscribe(function (resp) {
              document.getElementById('productos_input').value = '';
              document.getElementById('hojas_input').value = '';

              _this27.modal_nueva_gestion();

              _this27.getGestiones();
            });
          }
        }, {
          key: "getGestiones",
          value: function getGestiones() {
            var _this28 = this;

            this.api.getGestiones().subscribe(function (resp) {
              _this28.GESTIONES = resp;
            });
          }
        }, {
          key: "Tarea",
          value: function Tarea() {
            var _this29 = this;

            var hoy = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
            this.api.getTrabajos().subscribe(function (resp) {
              var nuevo = resp.filter(function (x) {
                return x.maquina.tipo === _this29.FASE;
              });

              if (nuevo) {
                var Long = nuevo.length;

                for (var i = 0; i < Long; i++) {
                  if (hoy >= nuevo[i].fechaI) {
                    if (hoy <= nuevo[i].fecha) {
                      _this29.TRABAJOS.push(nuevo[i]);
                    }
                  }
                }
              }
            });
          }
        }]);

        return GestionComponent;
      }();

      GestionComponent.??fac = function GestionComponent_Factory(t) {
        return new (t || GestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]));
      };

      GestionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GestionComponent,
        selectors: [["app-gestion"]],
        decls: 66,
        vars: 7,
        consts: [[1, "container"], [1, "card"], [1, "card-content"], [1, "titulo"], [1, "button", "is-primary", 3, "click"], [1, "select"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "subtitulo"], [1, "table", "is-fullwidth"], [4, "ngFor", "ngForOf"], [1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-body"], [1, "columns"], [1, "column"], ["id", "orden_selected"], ["type", "number", "id", "hojas_input", 1, "input", 3, "change"], ["type", "number", "id", "productos_input", 1, "input", 3, "change"], [3, "value"], [1, "button", "is-danger", 3, "click"], [4, "ngIf"], ["class", "button is-success", 3, "click", 4, "ngIf"], [1, "button", "is-success", 3, "click"]],
        template: function GestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Gestiones ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GestionComponent_Template_button_click_6_listener() {
              return ctx.modal_nueva_gestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Nueva Gesti\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function GestionComponent_Template_select_change_9_listener($event) {
              return ctx.fase($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Seleccionar fase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, GestionComponent_option_12_Template, 2, 2, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Ordenes para el dia de Hoy: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Orden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Maquina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Cant. Hojas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Cant. Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Fecha Estimada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, GestionComponent_tr_33_Template, 13, 6, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Gestiones Realizadas: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, GestionComponent_div_38_Template, 25, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GestionComponent_Template_div_click_40_listener() {
              return ctx.modal_nueva_gestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Gestion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Orden:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, GestionComponent_ng_container_53_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Gestion Realizada en Hojas:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function GestionComponent_Template_input_change_58_listener($event) {
              return ctx.calcular_Productos($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Gestion Realizada en Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function GestionComponent_Template_input_change_62_listener($event) {
              return ctx.calcular_Hojas($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GestionComponent_Template_button_click_64_listener() {
              return ctx.finalizar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Finalizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.FUNCIONES);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.TRABAJOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.TRABAJOS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.NUEVA_GESTION));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.TRABAJOS);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZW5lcy9nZXN0aW9uL2dlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmRlbmVzL2dlc3Rpb24vZ2VzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmKTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GestionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gestion',
            templateUrl: './gestion.component.html',
            styleUrls: ['./gestion.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O4wM":
    /*!************************************************!*\
      !*** ./src/app/ordenes/main/main.component.ts ***!
      \************************************************/

    /*! exports provided: MainComponent */

    /***/
    function O4wM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MainComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainComponent_tr_20_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var orden_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.alert(orden_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var orden_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](orden_r1.sort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](orden_r1.producto.producto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](orden_r1.cliente.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](9, 5, orden_r1.fecha_s, "dd/MM/yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.getEstados(orden_r1._id));
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(api, router) {
          _classCallCheck(this, MainComponent);

          this.api = api;
          this.router = router;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrdenes();
            this.obtenerTrabajos();
          }
        }, {
          key: "getOrdenes",
          value: function getOrdenes() {
            var _this30 = this;

            this.api.getOrden().subscribe(function (resp) {
              _this30.ORDENES = resp;
            });
          }
        }, {
          key: "alert",
          value: function alert(id) {
            this.router.navigateByUrl("orden-produccion/".concat(id));
          }
        }, {
          key: "getEstados",
          value: function getEstados(id) {
            var estado = this.TRABAJOS.find(function (x) {
              return x.orden._id == id && x.maquina.tipo === 'IMPRIMIR';
            });
            var hoy = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
            console.log(estado);

            if (hoy < estado.fechaI) {
              return "Impresi\xF3n Comienza el: ".concat(estado.fechaI);
            } else {
              var estado2 = this.TRABAJOS.find(function (x) {
                return x.orden._id == id && x.fechaI <= hoy && x.fecha >= hoy;
              });
              return "En proceso de: ".concat(estado2.maquina.tipo);
            }
          }
        }, {
          key: "obtenerTrabajos",
          value: function obtenerTrabajos() {
            var _this31 = this;

            this.api.getTrabajos().subscribe(function (resp) {
              _this31.TRABAJOS = resp;
            });
          }
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 21,
        vars: 1,
        consts: [[1, "container", "mt-5"], [1, "card", "mt-5"], [1, "card-content"], [1, "titulo"], [1, "table", "is-fullwidth", "is-hoverable"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Ordenes de Producci\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Orden de Produccion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Fecha solicitada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Estado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, MainComponent_tr_20_Template, 12, 8, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ORDENES);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZW5lcy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmRlbmVzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmKTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RFuu":
    /*!**********************************************!*\
      !*** ./src/app/ordenes/ordenes.component.ts ***!
      \**********************************************/

    /*! exports provided: OrdenesComponent */

    /***/
    function RFuu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdenesComponent", function () {
        return OrdenesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OrdenesComponent = /*#__PURE__*/function () {
        function OrdenesComponent() {
          _classCallCheck(this, OrdenesComponent);
        }

        _createClass(OrdenesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdenesComponent;
      }();

      OrdenesComponent.??fac = function OrdenesComponent_Factory(t) {
        return new (t || OrdenesComponent)();
      };

      OrdenesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrdenesComponent,
        selectors: [["app-ordenes"]],
        decls: 2,
        vars: 0,
        template: function OrdenesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVuZXMvb3JkZW5lcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdenesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ordenes',
            templateUrl: './ordenes.component.html',
            styleUrls: ['./ordenes.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RIPk":
    /*!*****************************************************!*\
      !*** ./src/app/nuevo-pedido/nuevo-pedido.module.ts ***!
      \*****************************************************/

    /*! exports provided: NuevoPedidoModule */

    /***/
    function RIPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoPedidoModule", function () {
        return NuevoPedidoModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "RsYb");
      /* harmony import */


      var _nuevo_pedido_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nuevo-pedido-routing.module */
      "eQ8z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var NuevoPedidoModule = function NuevoPedidoModule() {
        _classCallCheck(this, NuevoPedidoModule);
      };

      NuevoPedidoModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NuevoPedidoModule
      });
      NuevoPedidoModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NuevoPedidoModule_Factory(t) {
          return new (t || NuevoPedidoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nuevo_pedido_routing_module__WEBPACK_IMPORTED_MODULE_3__["NuevoPedidoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NuevoPedidoModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nuevo_pedido_routing_module__WEBPACK_IMPORTED_MODULE_3__["NuevoPedidoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NuevoPedidoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nuevo_pedido_routing_module__WEBPACK_IMPORTED_MODULE_3__["NuevoPedidoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RZrN":
    /*!**********************************************!*\
      !*** ./src/app/almacen/almacen.component.ts ***!
      \**********************************************/

    /*! exports provided: AlmacenComponent */

    /***/
    function RZrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlmacenComponent", function () {
        return AlmacenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AlmacenComponent = /*#__PURE__*/function () {
        function AlmacenComponent() {
          _classCallCheck(this, AlmacenComponent);
        }

        _createClass(AlmacenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlmacenComponent;
      }();

      AlmacenComponent.??fac = function AlmacenComponent_Factory(t) {
        return new (t || AlmacenComponent)();
      };

      AlmacenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AlmacenComponent,
        selectors: [["app-almacen"]],
        decls: 2,
        vars: 0,
        template: function AlmacenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbWFjZW4vYWxtYWNlbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlmacenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-almacen',
            templateUrl: './almacen.component.html',
            styleUrls: ['./almacen.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RaEd":
    /*!******************************************!*\
      !*** ./src/app/orden/orden.component.ts ***!
      \******************************************/

    /*! exports provided: OrdenComponent */

    /***/
    function RaEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdenComponent", function () {
        return OrdenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pdfmake-wrapper */
      "oNuZ");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrdenComponent_ng_container_140_ng_container_1_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Negro:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", ctx_r14.PRODUCTO.cliente.codigo, "-", ctx_r14.PRODUCTO.producto.codigo, "-", ctx_r14.PRODUCTO.producto.version, "-", ctx_r14.NumToLet(ctx_r14.PRODUCTO.montaje), "-1 ");
        }
      }

      function OrdenComponent_ng_container_140_ng_container_1_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Cyan:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", ctx_r15.PRODUCTO.cliente.codigo, "-", ctx_r15.PRODUCTO.producto.codigo, "-", ctx_r15.PRODUCTO.producto.version, "-", ctx_r15.NumToLet(ctx_r15.PRODUCTO.montaje), "-2 ");
        }
      }

      function OrdenComponent_ng_container_140_ng_container_1_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Magenta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", ctx_r16.PRODUCTO.cliente.codigo, "-", ctx_r16.PRODUCTO.producto.codigo, "-", ctx_r16.PRODUCTO.producto.version, "-", ctx_r16.NumToLet(ctx_r16.PRODUCTO.montaje), "-3 ");
        }
      }

      function OrdenComponent_ng_container_140_ng_container_1_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Amarillo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", ctx_r17.PRODUCTO.cliente.codigo, "-", ctx_r17.PRODUCTO.producto.codigo, "-", ctx_r17.PRODUCTO.producto.version, "-", ctx_r17.NumToLet(ctx_r17.PRODUCTO.montaje), "-4 ");
        }
      }

      function OrdenComponent_ng_container_140_ng_container_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          var TintaProducto_r11 = ctx_r19.$implicit;
          var i_r12 = ctx_r19.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", TintaProducto_r11.producto.color, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"](" ", ctx_r18.PRODUCTO.cliente.codigo, "-", ctx_r18.PRODUCTO.producto.codigo, "-", ctx_r18.PRODUCTO.producto.version, "-", ctx_r18.sumaTintas(i_r12), " ");
        }
      }

      function OrdenComponent_ng_container_140_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, OrdenComponent_ng_container_140_ng_container_1_p_3_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, OrdenComponent_ng_container_140_ng_container_1_p_4_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, OrdenComponent_ng_container_140_ng_container_1_p_5_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, OrdenComponent_ng_container_140_ng_container_1_p_6_Template, 4, 4, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, OrdenComponent_ng_container_140_ng_container_1_div_7_Template, 5, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.color === "Negro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.color === "Cyan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.color === "Magenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.color === "Amarillo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.color != "Amarillo" && TintaProducto_r11.producto.color != "Magenta" && TintaProducto_r11.producto.color != "Cyan" && TintaProducto_r11.producto.color != "Negro");
        }
      }

      function OrdenComponent_ng_container_140_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_140_ng_container_1_Template, 8, 5, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r11.producto.grupo.nombre === "Tinta");
        }
      }

      function OrdenComponent_ng_container_156_ng_container_1_ng_container_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](TintaProducto_r25.producto.largo);
        }
      }

      function OrdenComponent_ng_container_156_ng_container_1_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_156_ng_container_1_ng_container_9_ng_container_1_Template, 3, 1, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r25.producto.grupo.nombre === "Sustrato");
        }
      }

      function OrdenComponent_ng_container_156_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "DIRECCI\xD3N DE FIBRA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, OrdenComponent_ng_container_156_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", TintaProducto_r21.producto.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", TintaProducto_r21.producto.ancho, " x ", TintaProducto_r21.producto.largo, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r23.PRODUCTO.producto.materiales[ctx_r23.PRODUCTO.montaje]);
        }
      }

      function OrdenComponent_ng_container_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_156_ng_container_1_Template, 10, 4, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r21.producto.grupo.nombre === "Sustrato");
        }
      }

      function OrdenComponent_ng_container_191_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](TintaProducto_r30.producto.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", TintaProducto_r30.producto.nombre, " (", TintaProducto_r30.producto.marca, ") ");
        }
      }

      function OrdenComponent_ng_container_191_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_191_ng_container_1_Template, 6, 3, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r30.producto.grupo.nombre === "Tinta");
        }
      }

      function OrdenComponent_ng_container_196_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", TintaProducto_r34.producto.nombre, " (", TintaProducto_r34.producto.marca, ") ");
        }
      }

      function OrdenComponent_ng_container_196_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_196_ng_container_1_Template, 3, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r34.producto.grupo.nombre === "Barniz");
        }
      }

      function OrdenComponent_td_200_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Si");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrdenComponent_td_201_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrdenComponent_p_212_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var post_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" \u25CB ", post_r38, " ");
        }
      }

      function OrdenComponent_ng_container_219_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](TintaProducto_r39.producto.nombre);
        }
      }

      function OrdenComponent_ng_container_219_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_219_ng_container_1_Template, 3, 1, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r39.producto.grupo.nombre === "Pega");
        }
      }

      function OrdenComponent_ng_container_226_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](TintaProducto_r43.producto.nombre);
        }
      }

      function OrdenComponent_ng_container_226_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_226_ng_container_1_Template, 3, 1, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r43.producto.grupo.nombre === "Cajas Corrugadas");
        }
      }

      function OrdenComponent_ng_container_232_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", TintaProducto_r47.producto.nombre, " (", TintaProducto_r47.producto.marca, ") ");
        }
      }

      function OrdenComponent_ng_container_232_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, OrdenComponent_ng_container_232_ng_container_1_Template, 3, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var TintaProducto_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", TintaProducto_r47.producto.grupo.nombre === "Cinta de Embalaje");
        }
      }

      function OrdenComponent_tr_243_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var maquina_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", maquina_r51.maquina.nombre, " ");
        }
      }

      var OrdenComponent = /*#__PURE__*/function () {
        function OrdenComponent(route, api) {
          _classCallCheck(this, OrdenComponent);

          this.route = route;
          this.api = api;
          this.listo = true;
          this.id = this.route.snapshot.paramMap.get('id');
        }

        _createClass(OrdenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.api.getOrdenById(this.id).subscribe(function (resp) {
              _this32.PRODUCTO = resp;
              _this32.cantidad = new Intl.NumberFormat('de-DE').format(_this32.PRODUCTO.cantidad);
              _this32.demasia = Math.ceil(_this32.PRODUCTO.demasia * 100 / _this32.PRODUCTO.paginas);
              var ejemplares_montados = _this32.PRODUCTO.producto.ejemplares[_this32.PRODUCTO.montaje];
              var paginas_sin_demasia = _this32.PRODUCTO.cantidad / ejemplares_montados;
              _this32.PRODUCTO.demasia = Math.ceil(_this32.demasia * paginas_sin_demasia / 100); // this.PRODUCTO.demasia = this.PRODUCTO.producto.ejemplares[this.PRODUCTO.montaje]

              console.log(_this32.PRODUCTO, 'este es el Producto');

              _this32.getMaquinas(_this32.PRODUCTO._id);
            });
          }
        }, {
          key: "getMaquinas",
          value: function getMaquinas(orden) {
            var _this33 = this;

            this.api.getMaquinasByOrdens(orden).subscribe(function (resp) {
              _this33.Maquinas = resp;
              console.log(_this33.Maquinas, 'Estas son las maquinas');
            });
          }
        }, {
          key: "NumToLet",
          value: function NumToLet(n) {
            switch (n) {
              case 0:
                return "A";

              case 1:
                return "B";

              case 2:
                return "C";

              case 3:
                return "D";

              case 4:
                return "E";

              case 5:
                return "F";

              case 6:
                return "G";

              case 7:
                return "H";

              case 8:
                return "I";
            }
          }
        }, {
          key: "sumaTintas",
          value: function sumaTintas(n) {
            if (this.listo) {
              this.listo = false;
              this.necesidad = n - 5;
              return n + Math.abs(this.necesidad);
            } else {
              return n + Math.abs(this.necesidad);
            }
          }
        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            var PRODUCTO = this.PRODUCTO;
            console.log(this.PRODUCTO);
            PRODUCTO.fecha_o = moment__WEBPACK_IMPORTED_MODULE_4__(PRODUCTO.fecha_o).format('DD/MM/yyyy');
            PRODUCTO.fecha_s = moment__WEBPACK_IMPORTED_MODULE_4__(PRODUCTO.fecha_s).format('DD/MM/yyyy');
            PRODUCTO.fecha = moment__WEBPACK_IMPORTED_MODULE_4__(PRODUCTO.fecha).format('DD/MM/yyyy');
            PRODUCTO.cantidad_ = new Intl.NumberFormat('de-DE').format(PRODUCTO.cantidad);
            var montajes = this.NumToLet(PRODUCTO.montaje);
            var maquinas = this.Maquinas.maquinasDB;
            var maquina = [];
            var peliculas = [];
            var demasia = this.demasia;
            var materiales = PRODUCTO.producto.materiales[PRODUCTO.montaje];
            var tintas = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Tinta';
            });
            var sustrato = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Sustrato';
            });
            var barniz = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Barniz';
            });
            var cant_barniz = barniz[0].cantidad * PRODUCTO.paginas / 1000;
            var cantidad_barniz = cant_barniz.toFixed(2);
            var pega = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Pega';
            });
            console.log(pega, 'pegaa');
            var cantidad_pega;
            var pega_nombre = '';
            var pega_marca = '';
            var pega_unidad = '';

            if (pega.length == 0) {
              cantidad_pega = 'N/A';
            } else {
              var cant_pega = pega[0].cantidad * PRODUCTO.cantidad / 1000;
              cantidad_pega = cant_pega.toFixed(2);
              pega_nombre = pega[0].producto.nombre;
              pega_marca = pega[0].producto.marca;
              pega_unidad = pega[0].producto.unidad;
            }

            var caja = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Cajas Corrugadas';
            });
            var cant_cajas = PRODUCTO.cantidad / caja[0].cantidad;
            var cantidad_cajas = Math.ceil(cant_cajas);
            var cinta_ = caja[0].producto.cinta * cantidad_cajas;
            cinta_ = Math.ceil(cinta_);
            var cinta = materiales.filter(function (x) {
              return x.producto.grupo.nombre === 'Cinta de Embalaje';
            });
            var Nombre_sustrato = sustrato[0].producto.nombre;
            var tintas_color = [];
            var tintas_marca = [];
            var Estandar_de_color = '';

            if (PRODUCTO.e_c) {
              Estandar_de_color = 'SI';
            } else {
              Estandar_de_color = 'NO';
            }

            var _i = 5;

            for (var i = 0; i < tintas.length; i++) {
              if (tintas[i].producto.color === 'Negro') {
                var peli = "Negro: ".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes, "-1");
                peliculas.push(peli);
              } else if (tintas[i].producto.color === 'Cyan') {
                var _peli = "Cyan: ".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes, "-2");

                peliculas.push(_peli);
              } else if (tintas[i].producto.color === 'Magenta') {
                var _peli2 = "Magenta: ".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes, "-3");

                peliculas.push(_peli2);
              } else if (tintas[i].producto.color === 'Amarillo') {
                var _peli3 = "Amarillo: ".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes, "-4");

                peliculas.push(_peli3);
              } else {
                var _peli4 = "".concat(tintas[i].producto.color, ": ").concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes, "-").concat(_i++);

                peliculas.push(_peli4);
              }

              tintas_color.push(tintas[i].producto.color);
              var cantidad = tintas[i].cantidad * this.PRODUCTO.paginas / 1000;
              cantidad = Number(cantidad);
              var cantidad_tinta = cantidad.toFixed(2);
              var tinta = "".concat(tintas[i].producto.color, ": ").concat(tintas[i].producto.nombre, "(").concat(tintas[i].producto.marca, " - ").concat(cantidad_tinta).concat(tintas[i].producto.unidad, ")");
              tintas_marca.push(tinta);
            }

            for (var _i2 = 0; _i2 < maquinas.length; _i2++) {
              maquina.push(maquinas[_i2].maquina.nombre);
            }

            var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"]();
            pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);

            function generarPDF() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = pdf;
                        _context.t1 = pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"];
                        _context.t2 = pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"];
                        _context.next = 5;
                        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Img"]('../../assets/poli_cintillo.png').width(85).margin([20, 5]).build();

                      case 5:
                        _context.t3 = _context.sent;
                        _context.t4 = new _context.t2(_context.t3).rowSpan(4).end;
                        _context.t5 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("\n            ORDEN DE PRODUCCI\xD3N").bold().end).alignment('center').fontSize(13).rowSpan(4).end;
                        _context.t6 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??digo: FPR-008').end).fillColor('#dedede').fontSize(7).alignment('center').end;
                        _context.t7 = [_context.t4, _context.t5, _context.t6];
                        _context.t8 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('N?? de Revisi??n: 0').end).fillColor('#dedede').fontSize(7).alignment('center').end];
                        _context.t9 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('Fecha de Revision: 05/10/2021').end).fillColor('#dedede').fontSize(7).alignment('center').end];
                        _context.t10 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('P??gina: 1 de 5').end).fillColor('#dedede').fontSize(7).alignment('center').end];
                        _context.t11 = [_context.t7, _context.t8, _context.t9, _context.t10];
                        _context.t12 = new _context.t1(_context.t11).widths(['25%', '50%', '25%']).end;

                        _context.t0.add.call(_context.t0, _context.t12);

                        pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('ORDEN DE COMPRA').bold().end).colSpan(2).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('N??').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.orden)).end).fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('Fecha de OC:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.fecha_o)).end).fontSize(9).end]]).widths(['40%', '60%']).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('PRODUCTO').bold().end).colSpan(2).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('NOMBRE:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.producto.producto)).end).fontSize(12).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version)).end).fontSize(12).end]]).widths(['25%', '75%']).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('ORDEN DE PRODUCCI??N').bold().end).colSpan(2).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('N??:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.sort)).bold().end).fontSize(15).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('FECHA DE EMISI??N:').end).fillColor('#dedede').fontSize(8).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.fecha)).end).fontSize(9).end]]).widths(['40%', '60%']).end).end]]).layout('noBorders').widths(['30%', '40%', '30%']).end);
                        pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('INFORMACI??N DEL PRODUCTO').bold().end).colSpan(2).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('CLIENTE:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.cliente.nombre)).end).fontSize(12).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO DE PRODUCTO DEL CLIENTE:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.producto.cod_cliente)).end).fontSize(12).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO DE ESPECIFICACI??N:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("E-".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(PRODUCTO.producto.edicion)).end).fontSize(12).end]]).widths(['40%', '60%']).end).end]]).layout('noBorders').widths(['100%']).end);
                        pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('PLANIFICACI??N DE ENTREGAS').bold().end).colSpan(4).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('N??:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('CANTIDAD:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('FECHA SOLICITADA:').end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('LUGAR DE ENTREGA:').end).fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("1").end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.cantidad_)).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.fecha_s)).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.cliente.almacenes[PRODUCTO.montaje])).end).fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL").end).fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.cantidad_)).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("").end).border([false]).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("").end).border([false]).fontSize(9).end]]).widths(['7%', '31%', '31%', '31%']).end).end]]).layout('noBorders').widths(['100%']).end);
                        pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('CARACTER??STICAS Y MATERIALES ').bold().end).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('PRE-IMPRESI??N').end).fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO DEL MONTAJE').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("M-".concat(PRODUCTO.cliente.codigo, "-").concat(PRODUCTO.producto.codigo, "-").concat(PRODUCTO.producto.version, "-").concat(montajes)).end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('CANTIDAD DE EJEMPLARES').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.producto.ejemplares[PRODUCTO.montaje])).end).end]]).widths(['100%']).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO DE PELICULAS').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stack"](peliculas).fontSize(9).end]]).widths(['100%']).end).end]]).layout('noBorders').widths(['50%', '50%']).end).end]]).layout('noBorders').widths(['100%']).end).border([false]).fillColor('#ffffff').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('IMPRESI??N').end).fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('SUSTRATO').end).alignment('center').fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('TAMA??O ORIGINAL').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](Nombre_sustrato).end).fontSize(11).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(sustrato[0].producto.ancho, " x ").concat(sustrato[0].producto.largo)).end).alignment('center').fontSize(11).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('DIRECCI??N DE FIBRA').end).alignment('center').fillColor('#dedede').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('TAMA??O A IMPRIMIR').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](sustrato[0].producto.largo).end).alignment('center').fontSize(11).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.i_ancho, " x ").concat(PRODUCTO.i_largo)).end).alignment('center').fontSize(11).end]]).widths(['60%', '40%']).end).fontSize(9).end, // new Cell(new Table([
                        //   [
                        //     new Cell(new Txt('% DEMASIA').end).fillColor('#dedede').lineHeight(0.5).fontSize(9).end,
                        //     new Cell(new Txt(demasia).end).fontSize(11).alignment('center').end,
                        //   ],
                        //   [
                        //     new Cell(new Txt('HOJAS DE DEMASIA').end).fillColor('#dedede').fontSize(9).end,
                        //     new Cell(new Txt(PRODUCTO.demasia).end).fontSize(11).alignment('center').end,
                        //   ],
                        //   [
                        //     new Cell(new Txt('HOJAS A IMPRIMIR').end).fillColor('#dedede').fontSize(9).end,
                        //     new Cell(new Txt(`${PRODUCTO.paginas - demasia}`).end).fontSize(11).alignment('center').end,
                        //   ],
                        //   [
                        //     new Cell(new Txt('TOTAL DE HOJAS POR ASIGNAR').end).fillColor('#dedede').fontSize(9).end,
                        //     new Cell(new Txt(PRODUCTO.paginas).end).fontSize(11).alignment('center').end,
                        //   ]
                        // ]).widths(['80%','20%']).end
                        // ).fontSize(9).end,
                        new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('% DEMASIA').end).fillColor('#dedede').alignment('center').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('HOJAS DE DEMASIA:').end).fillColor('#dedede').alignment('center').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](demasia).end).fontSize(10).alignment('center').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](PRODUCTO.demasia).end).fontSize(10).alignment('center').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('HOJAS A IMPRIMIR:').end).fillColor('#dedede').alignment('center').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('TOTAL HOJAS A ASIGNAR:').end).fillColor('#dedede').alignment('center').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(PRODUCTO.paginas - PRODUCTO.demasia)).bold().end).fontSize(12).alignment('center').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](PRODUCTO.paginas).bold().end).fontSize(12).alignment('center').end]]).widths(['50%', '50%']).end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('BARNIZ').end).alignment('center').fillColor('#dedede').alignment('center').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('ESTANDAR DE COLOR:').alignment('center').end).fillColor('#dedede').alignment('center').fontSize(7).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(barniz[0].producto.nombre, " (").concat(barniz[0].producto.marca, " - ").concat(cantidad_barniz).concat(barniz[0].producto.unidad, ")")).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](Estandar_de_color).end).alignment('center').fontSize(9).end]]).widths(['70%', '30%']).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('TINTA').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stack"](tintas_marca).end).fontSize(9).end]]).widths(['100%']).end).fontSize(9).end]]).layout('noBorders').widths(['50%', '50%']).end // ]).layout('noBorders').widths(['33%', '27%', '40%']).end
                        ).end]]).layout('noBorders').widths(['100%']).end).border([false]).fillColor('#ffffff').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('POST-IMPRESI??N').end).fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stack"](PRODUCTO.producto.post).end).fontSize(9).border([false]).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('TIPO DE PEGA').alignment('center').end).fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(pega_nombre, " (").concat(pega_marca, " - ").concat(cantidad_pega).concat(pega_unidad, ")")).end).fontSize(9).end]]).widths(['100%']).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('C??DIGO DE CAJA').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(caja[0].producto.nombre, "(").concat(caja[0].producto.marca, " - ").concat(cantidad_cajas).concat(caja[0].producto.unidad, ")")).end).fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('CINTA DE EMBALAJE').end).alignment('center').fillColor('#dedede').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CINTA DE EMBALAJE CORRUGADO RECICLADO 3430(RELA - ".concat(cinta_, "Und)")).end).fontSize(9).end]]).widths(['100%']).end).end]]).layout('noBorders').widths(['50%', '50%']).end).end]]).layout('noBorders').widths(['100%']).end).border([false]).fillColor('#ffffff').end]]).widths(['100%']).end).end]]).layout('noBorders').widths(['100%']).end).end]]).layout('noBorders').widths(['100%']).end);
                        pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('EQUIPOS').end).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('OBSERVACIONES').end).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]('ELABORADO POR:').end).alignment('center').fillColor('#000000').color('#ffffff').fontSize(9).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stack"](maquina).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](PRODUCTO.observacion).end).fontSize(9).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("Firma:\n          \n            Fecha:").end).fontSize(9).end]]).widths(['34%', '33%', '33%']).end); // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( await new Img('../../assets/Poligrafica_black_P.png').build()).end,
                        //       new Cell( new Table([[new Cell(new Txt('ORDEN DE PRODUCCI??N').end).fillColor('#dedede').fontSize(9).end],
                        //                             [new Cell(new Txt(`${PRODUCTO.sort}`).end).fontSize(30).end],
                        //                             [new Cell(new Txt(`FECHA DE EMISION: ${fecha1}`).end).fontSize(8).end]
                        //                           ]).end).alignment('center').end
                        //     ]
                        //   ]).widths(['70%','30%']).layout('noBorders').end
                        // )
                        // pdf.add(
                        //   pdf.ln(2)
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( new Txt(`CLIENTE:??${PRODUCTO.cliente.nombre}`).end).end,
                        //       new Cell( new Txt(`O.C.:??${PRODUCTO.orden}`).end).end,
                        //     ],
                        //     [
                        //       new Cell( new Txt(`PRODUCTO:??${PRODUCTO.cliente.codigo} - ${PRODUCTO.producto.codigo} ${PRODUCTO.producto.producto}`).end).colSpan(2).end,
                        //       ''
                        //     ]
                        //   ]).widths(['60%','40%']).end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( new Txt('ENTREGAS').end).fillColor('#dedede').end
                        //     ]
                        //   ]).widths(['100%']).alignment('center').layout('noBorders').end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       'N?? ENTREGA','CANTIDAD','FECHA','OBSERVACI??N'
                        //     ],
                        //     [
                        //       '1',
                        //       new Cell( new Txt(`${PRODUCTO.cantidad}`).end).end,
                        //       new Cell( new Txt(`${PRODUCTO.fecha_s}`).end).end,
                        //       ''
                        //     ],
                        //     [
                        //       'TOTAL',
                        //       new Cell( new Txt(`${PRODUCTO.cantidad}`).end).end,
                        //       new Cell( new Txt('').end).border([false, false]).end,
                        //       new Cell( new Txt('').end).border([false, false]).end
                        //     ]
                        //   ]).widths(['24%','24%','24%','28%']).end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( new Txt('MONTAJE Y DESARROLLO').end).fillColor('#dedede').end
                        //     ]
                        //   ]).widths(['100%']).alignment('center').layout('noBorders').end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       'VERSI??N','IMPRESI??N','POST-IMPRESION'
                        //     ],
                        //     [
                        //       new Cell( new Txt(`${PRODUCTO.producto.version}`).end).end,
                        //       new Cell( new Stack(materiales).end).end,
                        //       new Cell( new Stack(PRODUCTO.producto.post).end).end
                        //     ],
                        //   ]).widths(['30%','40%','30%']).end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( new Txt('SUSTRATO').end).fillColor('#dedede').end
                        //     ]
                        //   ]).widths(['100%']).alignment('center').layout('noBorders').end
                        // )
                        // pdf.add(
                        //   new Table([
                        //     [
                        //       new Cell( new Txt(`TIPO DE SUSTRATO: ${PRODUCTO.producto.sustrato}`).end).colSpan(2).end,
                        //       ''
                        //     ],
                        //     [
                        //       new Cell( new Txt(`TAMA??O ORIGINAL: ${PRODUCTO.producto.dimensiones}`).end).end,
                        //       new Cell( new Txt(`DIRECCI??N DE FIBRA: ${PRODUCTO.producto.fibra}`).end).end,
                        //     ],
                        //     [
                        //       new Cell( new Txt(`DEMASIA: ${PRODUCTO.demasia}`).end).end,
                        //       new Cell( new Txt(`TAMA??O A IMPRIMIR: ${PRODUCTO.paginas}`).end).end,
                        //     ]
                        //   ]).widths(['50%','50%']).end
                        // )

                        pdf.create().download();

                      case 22:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            }

            generarPDF();
          }
        }]);

        return OrdenComponent;
      }();

      OrdenComponent.??fac = function OrdenComponent_Factory(t) {
        return new (t || OrdenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"]));
      };

      OrdenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: OrdenComponent,
        selectors: [["app-orden"]],
        decls: 264,
        vars: 50,
        consts: [[1, "container", "mt-5"], [1, "card"], [1, "card-content"], [1, "columns"], [1, "column", "is-3"], [1, "table", "is-bordered", "is-fullwidth"], ["colspan", "2"], [1, "column"], [1, "column", "is-4"], ["id", "n_orden"], ["width", "30%"], [1, "table", "is-fullwidth", "is-bordered"], ["colspan", "5"], ["tr", "", 4, "ngFor", "ngForOf"], [1, "table", "is-bordered-is-fullwidth"], ["width", "50%"], [4, "ngIf"], ["class", "post", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "table", "is-fullwidth", "isbordered"], ["colspan", "6"], [1, "button", "is-primary", 3, "click"], ["tr", ""], [1, "post"]],
        template: function OrdenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, " ORDEN DE COMPRA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "N\xBA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Fecha de OC:.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](21, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, " PRODUCTO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "NOMBRE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "C\xD3DIGO:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " ORDEN DE PRODUCCI\xD3N ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "N\xBA:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "b", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "FECHA DE EMISI\xD3N:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](55, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " INFORMACI\xD3N DEL PRODUCTO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "CLIENTE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "C\xD3DIGO DE PRODUCTO DEL CLIENTE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "C\xD3DIGO ESPECIFICACI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, " PLANIFICACI\xD3N DE ENTREGAS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "N\xBA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "CANTIDAD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "FECHA SOLICITADA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "LUGAR DE ENTREGA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](97, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "TOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, " CARACTER\xCDSTICAS Y MATERIALES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "PRE-IMPRESION");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, " C\xD3DIGO DEL MONTAJE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, " CANTIDAD DE EJEMPLARES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, " C\xD3DIGO DE PELICULA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](140, OrdenComponent_ng_container_140_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "IMPRESI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "SUSTRATO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "TAMA\xD1O ORIGINAL (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](156, OrdenComponent_ng_container_156_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "TAMA\xD1O DE SUSTRATO A IMPRIMIR (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "% DEMASIA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "HOJAS DE DEMASIA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "HOJAS A IMPRIMIR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "TOTAL DE HOJAS POR ASIGNAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "COLOR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "TINTA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](191, OrdenComponent_ng_container_191_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "BARNIZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](196, OrdenComponent_ng_container_196_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "ESTANDAR DE COLORES:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](200, OrdenComponent_td_200_Template, 2, 0, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](201, OrdenComponent_td_201_Template, 2, 0, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "POST-IMPRESI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](212, OrdenComponent_p_212_Template, 2, 1, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](213, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "TIPO DE PEGA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](219, OrdenComponent_ng_container_219_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "C\xD3DIGO DE CAJA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](226, OrdenComponent_ng_container_226_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "CINTA DE EMBALAJE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](232, OrdenComponent_ng_container_232_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, " PROCESOS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "EQUIPOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](243, OrdenComponent_tr_243_Template, 3, 1, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "OBSERVACIONES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "ELABORADO POR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](253, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](254, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](255, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, " Firma: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](258, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](259, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, " Fecha: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](261, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function OrdenComponent_Template_button_click_262_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "Descargar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.orden);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](21, 41, ctx.PRODUCTO.fecha_o, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.producto.producto);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate3"]("", ctx.PRODUCTO.cliente.codigo, "-", ctx.PRODUCTO.producto.codigo, "-", ctx.PRODUCTO.producto.version, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.sort);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](55, 44, ctx.PRODUCTO.fecha, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.cliente.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.producto.cod_cliente);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("E-", ctx.PRODUCTO.cliente.codigo, "-", ctx.PRODUCTO.producto.codigo, "-", ctx.PRODUCTO.producto.version, "-", ctx.PRODUCTO.producto.edicion, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.cantidad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](97, 47, ctx.PRODUCTO.fecha_s, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.cliente.almacenes[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.cantidad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"](" M-", ctx.PRODUCTO.cliente.codigo, "-", ctx.PRODUCTO.producto.codigo, "-", ctx.PRODUCTO.producto.version, "-", ctx.NumToLet(ctx.PRODUCTO.montaje), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.PRODUCTO.producto.ejemplares[ctx.PRODUCTO.montaje], " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.PRODUCTO.i_ancho, " x ", ctx.PRODUCTO.i_largo, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.demasia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.demasia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.paginas - ctx.PRODUCTO.demasia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.PRODUCTO.paginas);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.PRODUCTO.e_c === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.PRODUCTO.e_c != true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.post);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.PRODUCTO.producto.materiales[ctx.PRODUCTO.montaje]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.Maquinas.maquinasDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.PRODUCTO.observacion, " ");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [".has-text-centered[_ngcontent-%COMP%]{\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top:5px\r\n}\r\n.op[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    border:solid 1px black;\r\n    width: 160px;\r\n    text-align: center;\r\n}\r\n.orden[_ngcontent-%COMP%]{\r\n    border: solid 1px black;\r\n    width: 250px;\r\n    text-align: center;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\n    align-content: right;\r\n    text-align: center;\r\n}\r\n#table_[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n#n_orden[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.post[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZW4vb3JkZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL29yZGVuL29yZGVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzLXRleHQtY2VudGVyZWR7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOjVweFxyXG59XHJcblxyXG4ub3B7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vcmRlbntcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBhbGlnbi1jb250ZW50OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RhYmxlX3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbl9vcmRlbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnBvc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDRweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](OrdenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-orden',
            templateUrl: './orden.component.html',
            styleUrls: ['./orden.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "RsYb":
    /*!*****************************************************!*\
      !*** ./src/app/nuevo-pedido/main/main.component.ts ***!
      \*****************************************************/

    /*! exports provided: MainComponent */

    /***/
    function RsYb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MainComponent_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var cliente_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", cliente_r16._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cliente_r16.nombre);
        }
      }

      function MainComponent_div_13_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var producto_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", producto_r18._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](producto_r18.producto);
        }
      }

      function MainComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_div_13_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.producto_selected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Selecciona Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MainComponent_div_13_option_8_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.PRODUCTOS);
        }
      }

      function MainComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Orden de Compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainComponent_div_14_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.oc_ = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.oc_);
        }
      }

      function MainComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Fecha orden de compra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainComponent_div_15_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.fo_ = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("max", ctx_r3.hoy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.fo_);
        }
      }

      function MainComponent_div_16_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var almacen_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", almacen_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](almacen_r26);
        }
      }

      function MainComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Almacen de entrega:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_div_16_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.producto_selected($event);
          })("ngModelChange", function MainComponent_div_16_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.ae_ = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Selecciona Producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MainComponent_div_16_option_8_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.ae_);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.ALMACEN);
        }
      }

      function MainComponent_div_19_div_5_ng_container_14_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var maquina_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", maquina_r33._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](maquina_r33.nombre);
        }
      }

      function MainComponent_div_19_div_5_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_div_19_div_5_ng_container_14_option_1_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var maquina_r33 = ctx.$implicit;

          var fase_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", maquina_r33.tipo === fase_r31);
        }
      }

      function MainComponent_div_19_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_div_19_div_5_Template_select_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var fase_r31 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r37.colocarFecha($event, fase_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Selecciona Maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MainComponent_div_19_div_5_ng_container_14_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Fecha de Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_div_19_div_5_Template_input_change_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var fase_r31 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r39.reprogramar($event, fase_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Culminaci\xF3n Estimada ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fase_r31 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", fase_r31, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "", fase_r31, "-maquina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r30.MAQUINAS);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", fase_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "", fase_r31, "-C");
        }
      }

      function MainComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Fases de la Producci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MainComponent_div_19_div_5_Template, 27, 5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainComponent_div_19_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);

            return ctx_r40.finalizar(_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Generar Orden de Produccion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.PRODUCTO.grupo.tipos);
        }
      }

      function MainComponent_ng_container_54_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "ancho:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "largo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", materiales_r42.producto.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", materiales_r42.producto.largo);
        }
      }

      function MainComponent_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_ng_container_54_ng_container_1_Template, 9, 2, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", materiales_r42.producto.grupo.nombre === "Sustrato");
        }
      }

      function MainComponent_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r46 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", i_r46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Montaje ", ctx_r8.NumToLet(i_r46), " ");
        }
      }

      function MainComponent_p_79_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate5"](" ", materiales_r47.producto.nombre, " ", materiales_r47.producto.marca, " (", materiales_r47.producto.ancho, " x ", materiales_r47.producto.largo, ") x ", ctx_r48.paginas, " Hojas ");
        }
      }

      function MainComponent_p_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_p_79_ng_container_1_Template, 2, 5, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var materiales_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", materiales_r47.producto.grupo.nombre === "Sustrato");
        }
      }

      function MainComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "article", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Actualmente en su inventario no hay registrada la materia prima solicitada para realizar este producto, ingrese nueva materia e intentelo de nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_ng_container_99_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var material_r50 = ctx_r53.$implicit;
          var i_r51 = ctx_r53.index;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", material_r50.producto.nombre, " (", material_r50.producto.marca, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((material_r50.cantidad * ctx_r52.paginas / 1000).toFixed(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r52.buscar_tintas(material_r50.producto.nombre, material_r50.producto.marca));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r52.restantes_(material_r50.producto.nombre, material_r50.producto.marca, i_r51));
        }
      }

      function MainComponent_ng_container_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_ng_container_99_tr_1_Template, 9, 5, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var material_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", material_r50.producto.grupo.nombre === "Tinta");
        }
      }

      function MainComponent_ng_container_114_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var material_r54 = ctx_r57.$implicit;
          var i_r55 = ctx_r57.index;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", material_r54.producto.nombre, " (", material_r54.producto.marca, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((material_r54.cantidad * ctx_r56.paginas / 1000).toFixed(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r56.buscar_tintas(material_r54.producto.nombre, material_r54.producto.marca));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r56.restantes_(material_r54.producto.nombre, material_r54.producto.marca, i_r55));
        }
      }

      function MainComponent_ng_container_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_ng_container_114_tr_1_Template, 9, 5, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var material_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", material_r54.producto.grupo.nombre === "Barniz");
        }
      }

      function MainComponent_ng_container_129_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var material_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", material_r58.producto.nombre, " (", material_r58.producto.marca, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((material_r58.cantidad * ctx_r60.Cantidad_ejemplares / 1000).toFixed(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r60.buscar_tintas(material_r58.producto.nombre, material_r58.producto.marca));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r60.buscar_tintas(material_r58.producto.nombre, material_r58.producto.marca) - (material_r58.cantidad * ctx_r60.Cantidad_ejemplares / 1000).toFixed(2));
        }
      }

      function MainComponent_ng_container_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_ng_container_129_tr_1_Template, 9, 5, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var material_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", material_r58.producto.grupo.nombre === "Pega");
        }
      }

      function MainComponent_ng_container_144_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var material_r62 = ctx_r65.$implicit;
          var i_r63 = ctx_r65.index;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", material_r62.producto.nombre, " (", material_r62.producto.marca, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((ctx_r64.Cantidad_ejemplares / material_r62.cantidad).toFixed(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r64.buscar_tintas(material_r62.producto.nombre, material_r62.producto.marca));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r64.restantes_(material_r62.producto.nombre, material_r62.producto.marca, i_r63, "caja"));
        }
      }

      function MainComponent_ng_container_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MainComponent_ng_container_144_tr_1_Template, 9, 5, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var material_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", material_r62.producto.grupo.nombre === "Cajas Corrugadas");
        }
      }

      function MainComponent_button_145_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainComponent_button_145_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r66.TimesTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Gestionar tiempo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      var _c1 = function _c1() {
        return [];
      };

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(api, router) {
          _classCallCheck(this, MainComponent);

          this.api = api;
          this.router = router;
          this.NUEVA_ORDEN = false;
          this.cs = false;
          this.ps = false;
          this.os = false;
          this.Cantidad_ejemplares = 1000;
          this.Ejemplares_montados = 1;
          this.demasia = 0;
          this.paginas = Math.ceil(this.Cantidad_ejemplares / this.Ejemplares_montados);
          this.Fases = false;
          this.SinMaterial = false;
          this.i_montajes = 0;
          this.oc_ = '';
          this.fo_ = '';
          this.ae_ = '';
          this.observacion_ = '';
          this.TOTALES = [{
            material: null,
            marca: null,
            total: null,
            grupo: null,
            presentacion: null,
            neto: null,
            unidad: null,
            ancho: null,
            largo: null
          }];
          this.PRODUCTOS = [];
          this.PRODUCTO = {
            montajes: null,
            ejemplares: null,
            materiales: [],
            _id: null,
            grupo: null,
            sustrato: [{
              nombre: '',
              marca: ''
            }],
            dimensiones: null
          };
          this.CANTIDAD = [];
          this._CANTIDAD = [];
          this.restantes = [];
          this.almacenes = [];
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerClientes();
            this.BuscarAlmacen();
            this.Almacenado();
            this.hoy = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
          }
        }, {
          key: "NumToLet",
          value: function NumToLet(n) {
            switch (n) {
              case 0:
                return "A";

              case 1:
                return "B";

              case 2:
                return "C";

              case 3:
                return "D";

              case 4:
                return "E";

              case 5:
                return "F";

              case 6:
                return "G";

              case 7:
                return "H";

              case 8:
                return "I";
            }
          }
        }, {
          key: "alertaRoja",
          value: function alertaRoja(aja) {
            var cantidad = this.PRODUCTO.materiales.length;

            if (cantidad > this.restantes.length) {
              this.restantes.push(aja);
            } else {
              this.restantes = [];
              this.restantes.push(aja);
            }

            console.log(this.restantes);
          }
        }, {
          key: "modal_nueva_orden",
          value: function modal_nueva_orden() {
            if (!this.NUEVA_ORDEN) {
              this.NUEVA_ORDEN = true;
            } else {
              this.NUEVA_ORDEN = false;
            }
          }
        }, {
          key: "obtenerClientes",
          value: function obtenerClientes() {
            var _this34 = this;

            this.api.GetClientes().subscribe(function (resp) {
              _this34.CLIENTES = resp.clientes;
            });
          }
        }, {
          key: "cliente_selected",
          value: function cliente_selected(e) {
            var _this35 = this;

            if (e.target.value === '0') {
              this.cs = false;
            } else {
              this.cs = true;
              this.CLIENTE = e.target.value;
              var index = this.CLIENTES.find(function (x) {
                return x._id === e.target.value;
              });
              this.ALMACEN = index.almacenes;
              console.log(this.ALMACEN);
            }

            this.api.getById(e.target.value).subscribe(function (resp) {
              _this35.PRODUCTOS = resp.productos;
              console.log(_this35.PRODUCTOS);
            });
          }
        }, {
          key: "Almacenado",
          value: function Almacenado() {
            var _this36 = this;

            this.api.getAlmacenado().subscribe(function (resp) {
              _this36._CANTIDAD = resp;

              _this36.totalizar_materiales();
            });
          }
        }, {
          key: "cambios",
          value: function cambios() {
            this.Ejemplares_montados = this.PRODUCTO.ejemplares[this.i_montajes];
            this.Ejemplares(this.Ejemplares_montados);
          }
        }, {
          key: "producto_selected",
          value: function producto_selected(e) {
            var _this37 = this;

            if (e.target.value === '0') {
              this.ps = false;
            } else {
              this.ps = true;
            }

            this.api.getOneById(e.target.value).subscribe(function (resp) {
              _this37.PRODUCTO = resp.producto;
              console.log(_this37.PRODUCTO, 'PRODUCTO');
              _this37.montajes = _this37.PRODUCTO.montajes;
              _this37.Ejemplares_montados = _this37.PRODUCTO.ejemplares[_this37.i_montajes];

              _this37.Ejemplares(_this37.Ejemplares_montados);

              _this37.MAQUINAS = resp.maquinas; //   this.modal_nueva_orden()

              var x = _this37.PRODUCTO.materiales.length;
              _this37.CANTIDAD = [];

              var _loop = function _loop(i) {
                var respuesta = _this37._CANTIDAD.find(function (x) {
                  return x.material.nombre == _this37.PRODUCTO[_this37.i_montajes].materiales[i].producto.nombre && x.material.marca == _this37.PRODUCTO.materiales[i].producto.marca && x.material.grupo.nombre;
                });

                console.log(_this37.PRODUCTO);

                if (!respuesta) {
                  _this37.SinMaterial = true;
                  return {
                    v: void 0
                  };
                } else {
                  _this37.SinMaterial = false;
                }

                _this37.CANTIDAD.push(respuesta);
              };

              for (var i = 0; i < x; i++) {
                var _ret = _loop(i);

                if (typeof _ret === "object") return _ret.v;
              }
            });
          }
        }, {
          key: "orden_selected",
          value: function orden_selected(e) {
            if (e.target.value === null) {
              this.os = false;
            } else {
              this.os = true;
              this.OC = e.target.value;
            }
          }
        }, {
          key: "BuscarAlmacen",
          value: function BuscarAlmacen() {
            var _this38 = this;

            this.api.getAlmacen().subscribe(function (resp) {
              _this38.ALMACEN = resp.materiales;

              _this38.totalizar_materiales();
            });
          }
        }, {
          key: "Cantidad",
          value: function Cantidad(e) {
            this.Cantidad_ejemplares = e.target.value;
            this.paginas = Math.ceil(this.Cantidad_ejemplares / this.Ejemplares_montados);
            var demasia = document.getElementById('demasia_input').value;
            this.Demasia(demasia); // this.paginas = this.paginas + this.demasia
            // this.paginas = this.paginas
          }
        }, {
          key: "Ejemplares",
          value: function Ejemplares(e) {
            this.Ejemplares_montados = e;
            this.paginas = Math.ceil(this.Cantidad_ejemplares / this.Ejemplares_montados);
            this.paginas = this.paginas + this.demasia;
            this.paginas = this.paginas;
          }
        }, {
          key: "Demasia",
          value: function Demasia(e) {
            this.paginas = Math.ceil(this.Cantidad_ejemplares / this.Ejemplares_montados);
            this.demasia = Math.ceil(e * this.paginas / 100);
            this.paginas = this.paginas + this.demasia;
            this.paginas = this.paginas;
          }
        }, {
          key: "buscar_tintas",
          value: function buscar_tintas(tinta, marca) {
            var almacenado = this._CANTIDAD.filter(function (x) {
              return x.material.nombre === tinta && x.material.marca === marca;
            });

            if (almacenado.length < 1) {
              return 'No hay producto en inventario';
            } else {
              var cantidades = 0;

              for (var i = 0; i < almacenado.length; i++) {
                cantidades = cantidades + Number(almacenado[i].cantidad); // console.log(almacenado[i].material.nombre, ' <> ', cantidades)
              }

              cantidades = cantidades * almacenado[0].material.neto;
              return cantidades.toFixed(2);
            }
          }
        }, {
          key: "restantes_",
          value: function restantes_(tinta, marca, i, caja) {
            var almacenado = this._CANTIDAD.filter(function (x) {
              return x.material.nombre === tinta && x.material.marca === marca;
            });

            if (almacenado.length < 1) {
              return 0;
            } else {
              var cantidades = 0;

              for (var _i3 = 0; _i3 < almacenado.length; _i3++) {
                cantidades = cantidades + Number(almacenado[_i3].cantidad);
              }

              cantidades = cantidades * almacenado[0].material.neto; //  * this.paginas

              var necesario;

              if (caja === 'caja') {
                necesario = this.Cantidad_ejemplares / this.PRODUCTO.materiales[this.i_montajes][i].cantidad;
              } else {
                necesario = this.PRODUCTO.materiales[this.i_montajes][i].cantidad * this.paginas / 1000;
              }

              var EnAlmacen = cantidades.toFixed(2);
              return (Number(EnAlmacen) - necesario).toFixed(2);
            }
          }
        }, {
          key: "totalizar_materiales",
          value: function totalizar_materiales() {
            var _this39 = this;

            var _loop2 = function _loop2(i) {
              var existe = _this39.TOTALES.find(function (x) {
                return x.material == _this39._CANTIDAD[i].material.nombre && x.marca == _this39._CANTIDAD[i].material.marca;
              });

              if (existe) {
                var x = _this39.TOTALES.findIndex(function (x) {
                  return x.material == _this39._CANTIDAD[i].material.nombre && x.marca == _this39._CANTIDAD[i].material.marca;
                });

                _this39.TOTALES[x].total = Number(_this39.TOTALES[x].total);
                _this39._CANTIDAD[i].cantidad = Number(_this39._CANTIDAD[i].cantidad);
                _this39._CANTIDAD[i].neto = Number(_this39._CANTIDAD[i].material.neto);
                var def = _this39._CANTIDAD[i].neto * _this39._CANTIDAD[i].cantidad / _this39.TOTALES[x].neto;
                _this39.TOTALES[x].total = _this39.TOTALES[x].total + def;
              } else {
                _this39.TOTALES.push({
                  material: _this39._CANTIDAD[i].material.nombre,
                  marca: _this39._CANTIDAD[i].material.marca,
                  grupo: _this39._CANTIDAD[i].material.grupo.nombre,
                  presentacion: _this39._CANTIDAD[i].material.presentacion,
                  neto: _this39._CANTIDAD[i].material.neto,
                  unidad: _this39._CANTIDAD[i].material.unidad,
                  ancho: _this39._CANTIDAD[i].material.ancho,
                  largo: _this39._CANTIDAD[i].material.largo,
                  total: _this39._CANTIDAD[i].cantidad
                });
              }
            };

            for (var i = 0; i < this._CANTIDAD.length; i++) {
              _loop2(i);
            }
          }
        }, {
          key: "Fecha_s",
          value: function Fecha_s(e) {
            this.Fecha_S = e;
          }
        }, {
          key: "TimesTime",
          value: function TimesTime() {
            var index = this.PRODUCTO.materiales[this.i_montajes].length;

            for (var i = 0; i < index; i++) {
              if (this.PRODUCTO.materiales[this.i_montajes][i].producto.grupo.nombre != "Sustrato") {
                var resto = void 0;

                if (this.PRODUCTO.materiales[this.i_montajes][i].producto.grupo.nombre === "Cajas Corrugadas") {
                  resto = this.restantes_(this.PRODUCTO.materiales[this.i_montajes][i].producto.nombre, this.PRODUCTO.materiales[this.i_montajes][i].producto.marca, i, 'caja');
                } else {
                  resto = this.restantes_(this.PRODUCTO.materiales[this.i_montajes][i].producto.nombre, this.PRODUCTO.materiales[this.i_montajes][i].producto.marca, i);
                }

                resto = Number(resto);

                if (resto < 0) {
                  console.log(this.PRODUCTO.materiales[this.i_montajes][i].producto.nombre, '<>', resto);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'No posees los materiales necesarios para realizar este producto',
                    showConfirmButton: false
                  });
                  return;
                }
              }
            } // for(let i=0; i<this.restantes.length; i++){
            //   if(this.restantes[i] < 0){
            //     Swal.fire({
            //       icon:'error',
            //       title:'Oops!',
            //       text:'No posees los materiales necesarios para realizar este producto',
            //       showConfirmButton:false,
            //       // timer:2500
            //     })
            //     return
            //   }
            // }


            this.Fases = true;
            this.modal_nueva_orden();
          }
        }, {
          key: "colocarFecha",
          value: function colocarFecha(e, fase) {
            var _this40 = this;

            // CPH = CANTIDAD POR HOJAS
            this.api.getFechas(e.target.value).subscribe(function (resp) {
              console.log(resp, '__________________________');
              var cph = 0;
              var HorasAgregadas = 0;
              var fecha;

              if (resp.trabajo.length > 0) {
                cph = resp.trabajo[0].maquina.cph; // HpC = this.paginas / diasAgregados;
                // let hoymas3 = moment(resp.trabajo[0].fecha).add(HpC, 'hours').format('yyyy-MM-DD');

                fecha = resp.trabajo[0].fecha;
              } else {
                var hoy = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy-MM-DD');
                fecha = hoy;
              }

              document.getElementById(fase).value = fecha;

              if (cph > 0) {
                HorasAgregadas = _this40.paginas / cph;
              } else {
                var MaquinaSelected2 = _this40.MAQUINAS.find(function (x) {
                  return x._id == e.target.value;
                });

                cph = MaquinaSelected2.cph;
                HorasAgregadas = _this40.paginas / cph;
              }

              var dias = HorasAgregadas / 7;
              var hoymas3 = moment__WEBPACK_IMPORTED_MODULE_1__(fecha).add(dias, 'days').format('yyyy-MM-DD');
              document.getElementById("".concat(fase, "-C")).value = hoymas3;
            });
          }
        }, {
          key: "reprogramar",
          value: function reprogramar(e, fase) {
            var maquina = document.getElementById("".concat(fase, "-maquina")).value;
            var MaquinaSelected2 = this.MAQUINAS.find(function (x) {
              return x._id == maquina;
            });
            var cph = MaquinaSelected2.cph;
            var HorasAgregadas = this.paginas / cph;
            var dias = HorasAgregadas / 7;
            var hoymas3 = moment__WEBPACK_IMPORTED_MODULE_1__(e.target.value).add(dias, 'days').format('yyyy-MM-DD');
            document.getElementById("".concat(fase, "-C")).value = hoymas3;
          }
        }, {
          key: "test",
          value: function test() {
            console.log();
          }
        }, {
          key: "finalizar",
          value: function finalizar(cantidad) {
            var _this41 = this;

            var data = {
              fecha_o: this.fo_,
              montaje: this.i_montajes,
              cliente: this.CLIENTE,
              producto: this.PRODUCTO._id,
              orden_compra: this.oc_,
              cantidad: cantidad.value,
              paginas: this.paginas,
              demasia: this.demasia,
              fecha_s: this.Fecha_S,
              almacen: this.ae_,
              e_c: document.getElementById("e_c").checked,
              i_ancho: document.getElementById("ancho_imprimir").value,
              i_largo: document.getElementById("largo_imprimir").value,
              observacion: this.observacion_
            };
            this.api.postOrden(data).subscribe(function (resp) {
              var fases = _this41.PRODUCTO.grupo.tipos.length;

              for (var x = 0; x < fases; x++) {
                var fase = _this41.PRODUCTO.grupo.tipos[x];
                var maquina = document.getElementById("".concat(fase, "-maquina")).value;
                var fechaI = document.getElementById("".concat(fase)).value;
                var fecha = document.getElementById("".concat(fase, "-C")).value;
                var Data = {
                  maquina: maquina,
                  fechaI: fechaI,
                  fecha: fecha,
                  orden: resp
                };

                _this41.api.postOrden2(Data).subscribe(function (respuesta) {
                  console.log(respuesta);
                });
              }

              _this41.router.navigate(["/orden-produccion/".concat(resp)]);
            });
          }
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 146,
        vars: 24,
        consts: [[1, "columns", "mt-5"], [1, "column", "is-3"], [1, "card"], [1, "card-content"], [1, "field"], [1, "label"], [1, "control"], [1, "select"], ["id", "cliente", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "field", 4, "ngIf"], [1, "button", "is-primary", 3, "disabled", "click"], ["class", "column", 4, "ngIf"], [1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-body"], [1, "subtitulo"], [1, "columns"], [1, "column"], ["type", "number", "value", "1000", 1, "input", 3, "change"], ["cantidad", ""], ["type", "number", "value", "0", "id", "demasia_input", 1, "input", 3, "change"], ["type", "date", "value", "0", 1, "input", 3, "min", "change"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "Estandar", "id", "e_c"], ["placeholder", "Observaci\xF3n", 1, "textarea", 3, "ngModel", "ngModelChange"], ["name", "montaje", 3, "ngModel", "ngModelChange", "click"], [4, "ngIf"], [1, "table", "is-fullwidth"], ["class", "button is-primary", 3, "click", 4, "ngIf"], [3, "value"], ["id", "producto", 3, "change"], ["type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "f_oc", 1, "input", 3, "max", "ngModel", "ngModelChange"], ["id", "producto", 3, "ngModel", "change", "ngModelChange"], [1, "card", "planificacion"], [1, "titulo"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "button", "is-primary", "mt-5", 3, "click"], [1, "subtitulo_"], [3, "id", "change"], ["value", ""], ["type", "date", 1, "input", 3, "id", "change"], ["type", "date", "disabled", "", 1, "input", 3, "id"], [3, "value", 4, "ngIf"], ["type", "number", "min", "10", "id", "ancho_imprimir", 1, "input", 3, "value"], ["type", "number", "min", "10", "id", "largo_imprimir", 1, "input", 3, "value"], [1, "message", "is-danger"], [1, "message-body"], [1, "button", "is-primary", 3, "click"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_Template_select_change_9_listener($event) {
              return ctx.cliente_selected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Selecciona Cliente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MainComponent_option_12_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MainComponent_div_13_Template, 9, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MainComponent_div_14_Template, 5, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MainComponent_div_15_Template, 5, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, MainComponent_div_16_Template, 9, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainComponent_Template_button_click_17_listener() {
              return ctx.modal_nueva_orden();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Realizar Programaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, MainComponent_div_19_Template, 8, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainComponent_Template_div_click_21_listener() {
              return ctx.modal_nueva_orden();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Nueva Orden de Producci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_Template_input_change_33_listener($event) {
              return ctx.Cantidad($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Demasia (%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_Template_input_change_40_listener($event) {
              return ctx.Demasia($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Fecha Solic.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function MainComponent_Template_input_change_46_listener($event) {
              return ctx.Fecha_s($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Tama\xF1o de sustrato a imprimir:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, MainComponent_ng_container_54_Template, 2, 1, "ng-container", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Estandar de Colores ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Observaci\xF3n:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainComponent_Template_textarea_ngModelChange_63_listener($event) {
              return ctx.observacion_ = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Montaje:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainComponent_Template_select_ngModelChange_69_listener($event) {
              return ctx.i_montajes = $event;
            })("click", function MainComponent_Template_select_click_69_listener() {
              return ctx.cambios();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, MainComponent_option_70_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Ejemplares montados: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Sustrato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, MainComponent_p_79_Template, 2, 1, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Materia Prima");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, MainComponent_div_83_Template, 4, 0, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Tintas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Mat. a utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Cant. Necesaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Cant. Almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Cant. Restante");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](99, MainComponent_ng_container_99_Template, 2, 1, "ng-container", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Barniz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Mat. a utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Cant. Necesaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Cant. Almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Cant. Restante");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, MainComponent_ng_container_114_Template, 2, 1, "ng-container", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Pega");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Mat. a utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Cant. Necesaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Cant. Almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Cant. Restante");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, MainComponent_ng_container_129_Template, 2, 1, "ng-container", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Cajas Corrugadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Mat. a utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Cant. Necesaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Cant. Almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Cant. Restante");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](144, MainComponent_ng_container_144_Template, 2, 1, "ng-container", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](145, MainComponent_button_145_Template, 2, 0, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.CLIENTES);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.oc_);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.fo_);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.ae_);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Fases);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx.NUEVA_ORDEN));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", ctx.hoy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.observacion_);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.i_montajes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](23, _c1).constructor(ctx.montajes));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.Ejemplares_montados, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.SinMaterial);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PRODUCTO.materiales[ctx.i_montajes]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.SinMaterial);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo_[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: rgb(241, 241, 241);\r\n    padding: 3px;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n\r\n.planificacion[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    position: relative;\r\n}\r\n\r\n.fases[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 25%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVldm8tcGVkaWRvL21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvbnVldm8tcGVkaWRvL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmKTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb197XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4ubXQtNXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ucGxhbmlmaWNhY2lvbntcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mYXNlc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkIHRyIHRoe1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLyogLnNlbGVjdHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxufSAqLyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Poligrafica';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ThZU":
    /*!**********************************************************!*\
      !*** ./src/app/planificacion/planificacion.component.ts ***!
      \**********************************************************/

    /*! exports provided: PlanificacionComponent */

    /***/
    function ThZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlanificacionComponent", function () {
        return PlanificacionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PlanificacionComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var day_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 1, day_r2, 0, 3));
        }
      }

      function PlanificacionComponent_li_14_div_3_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Producto: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Numero de Orden: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Cantidad: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Maquina: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var id_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", id_r8.orden.producto.producto, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", id_r8.orden.sort, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", id_r8.orden.cantidad, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", id_r8.maquina.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", id_r8.orden.sort, " ");
        }
      }

      function PlanificacionComponent_li_14_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PlanificacionComponent_li_14_div_3_ng_container_4_Template, 20, 5, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var funcion_r6 = ctx.$implicit;

          var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](funcion_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.getFechas(day_r3 == null ? null : day_r3.value, funcion_r6));
        }
      }

      function PlanificacionComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PlanificacionComponent_li_14_div_3_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;
          var first_r4 = ctx.first;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("grid-column-start", first_r4 ? day_r3 == null ? null : day_r3.indexWeek : "auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](day_r3 == null ? null : day_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.FUNCIONES);
        }
      }

      var PlanificacionComponent = /*#__PURE__*/function () {
        function PlanificacionComponent(api) {
          _classCallCheck(this, PlanificacionComponent);

          this.api = api;
          this.FUNCIONES = [];
          this.TRABAJOS = [];
          this.cargado = false; // ***********************************************************

          this.week = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        }

        _createClass(PlanificacionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ObtenerMaquinas();
            this.obtenerTrabajos();
            var mes = moment__WEBPACK_IMPORTED_MODULE_1__().format('M');
            var ano = moment__WEBPACK_IMPORTED_MODULE_1__().format('yyyy');
            this.getDaysFromDate(mes, ano);
          } // ***********************************************************

        }, {
          key: "getDaysFromDate",
          value: function getDaysFromDate(month, year) {
            moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');
            moment__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]('es', {
              months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            });
            var startDate = moment__WEBPACK_IMPORTED_MODULE_1__("".concat(year, "/").concat(month, "/01"));
            var endDate = startDate.clone().endOf('month');
            this.dateSelect = startDate;
            var diffDays = endDate.diff(startDate, 'days', true);
            var numberDays = Math.round(diffDays);
            var arrayDays = Object.keys(_toConsumableArray(Array(numberDays))).map(function (a) {
              a = parseInt(a) + 1;
              var dayObject = moment__WEBPACK_IMPORTED_MODULE_1__("".concat(year, "-").concat(month, "-").concat(a));
              return {
                name: dayObject.format("dddd"),
                value: a,
                indexWeek: dayObject.isoWeekday()
              };
            });
            this.monthSelect = arrayDays;
          }
        }, {
          key: "changeMonth",
          value: function changeMonth(flag) {
            if (flag < 0) {
              var prevDate = this.dateSelect.clone().subtract(1, "month");
              this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
            } else {
              var nextDate = this.dateSelect.clone().add(1, "month");
              this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
            }
          }
        }, {
          key: "clickDay",
          value: function clickDay(day) {
            var monthYear = this.dateSelect.format('YYYY-MM');
            var parse = "".concat(monthYear, "-").concat(day.value);
            var objectDate = moment__WEBPACK_IMPORTED_MODULE_1__(parse);
            this.dateValue = objectDate;
          }
        }, {
          key: "ObtenerMaquinas",
          value: function ObtenerMaquinas() {
            var _this42 = this;

            this.api.GetMaquinas().subscribe(function (maquinas) {
              _this42.MAQUINAS = maquinas;

              _this42.obtenerTipos();

              _this42.cargado = true;
            });
          }
        }, {
          key: "obtenerTipos",
          value: function obtenerTipos() {
            var x = this.MAQUINAS.length;

            for (var i = 0; i < x; i++) {
              var inde = this.FUNCIONES.includes(this.MAQUINAS[i].tipo);

              if (!inde) {
                this.FUNCIONES.push(this.MAQUINAS[i].tipo);
              }
            }
          }
        }, {
          key: "getFechas",
          value: function getFechas(fecha, funcion) {
            // 2021-08-
            var mes = moment__WEBPACK_IMPORTED_MODULE_1__(this.dateSelect).format('MM');
            var ano = moment__WEBPACK_IMPORTED_MODULE_1__(this.dateSelect).format('yyyy');

            if (fecha < 10) {
              fecha = "0".concat(fecha);
            }

            fecha = "".concat(ano, "-").concat(mes, "-").concat(fecha);
            var betas = [];
            var nuevo = this.TRABAJOS.filter(function (x) {
              return x.maquina.tipo === funcion;
            });

            if (nuevo) {
              var _final = [];
              var Long = nuevo.length;

              for (var i = 0; i < Long; i++) {
                if (fecha >= nuevo[i].fechaI) {
                  if (fecha <= nuevo[i].fecha) {
                    _final.push(nuevo[i]);

                    console.log(_final);
                  }
                }
              }

              return _final;
            } // console.log(nuevo)

          } // console.log(this.TRABAJOS.length )
          // fecha = '2021-08-20'
          // funcion = "IMPRESION"
          // let nuevo = this.TRABAJOS.find(x => x.maquina.tipo === funcion);
          // if(nuevo){
          //   let fecha_final = moment(nuevo.fecha).format('yyyy-MM-DD')
          //   let fecha_Inicial = moment(nuevo.fechaI).format('yyyy-MM-DD')
          //   let fecha_actual = moment(fecha).format('yyyy-MM-DD')
          //   console.log(nuevo)
          // let MI:boolean = fecha_actual >= fecha_Inicial;
          // if(MI){
          //   let MF:boolean = fecha_actual <= fecha_final;
          //   console.log(MF)
          // }
          // if(nuevo){
          //   let fecha_final = moment(nuevo.fecha).format('yyyy-MM-DD')
          //   let fecha_Inicial = moment(nuevo.fechaI).format('yyyy-MM-DD')
          //   let fecha_actual = moment(fecha).format('yyyy-MM-DD')
          //   let MI:boolean = fecha_actual >= fecha_Inicial;
          //   if(MI){
          //     let MF:boolean = fecha_actual <= fecha_final;
          //     if(MF){
          //       console.log(nuevo,'_',funcion)
          //       return `${nuevo._id.slice(3,6)}`
          //     }
          //   }
          // }
          // if(nuevo){
          //   let fecha_final = moment(nuevo.fecha).format('yyyy-MM-DD')
          //   let fecha_Inicial = moment(nuevo.fechaI).format('yyyy-MM-DD')
          //   let fecha_actual = moment(fecha).format('yyyy-MM-DD')
          //   let MI:boolean = fecha_actual >= fecha_Inicial;
          //   if(MI){
          //     let MF:boolean = fecha_actual <= fecha_final;
          //     if(MF){
          //       console.log('aqui',nuevo)
          //        return `${nuevo._id.slice(3,6)}`
          //     }
          //   }
          // }
          // if(nuevo.fecha < fecha)
          // if(nuevo){
          //   let nuevo2 = nuevo.find(x => x.fecha <= fecha)
          //   console.log(nuevo2)
          // }
          // return nuevo

        }, {
          key: "obtenerTrabajos",
          value: function obtenerTrabajos() {
            var _this43 = this;

            this.api.getTrabajos().subscribe(function (resp) {
              _this43.cargado = false;
              _this43.TRABAJOS = resp;
              console.log(_this43.TRABAJOS);
              _this43.cargado = true;
            });
          }
        }]);

        return PlanificacionComponent;
      }();

      PlanificacionComponent.??fac = function PlanificacionComponent_Factory(t) {
        return new (t || PlanificacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]));
      };

      PlanificacionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PlanificacionComponent,
        selectors: [["app-planificacion"]],
        decls: 15,
        vars: 6,
        consts: [[1, "mt-5"], [1, "header-calendar"], [1, "button", "is-primary", 3, "click"], ["class", "day-name", 4, "ngFor", "ngForOf"], [3, "gridColumnStart", 4, "ngFor", "ngForOf"], [1, "day-name"], [4, "ngFor", "ngForOf"], [1, "plan"], [1, "titulo"], [1, "op"], [1, "tooltip"]],
        template: function PlanificacionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PlanificacionComponent_Template_button_click_4_listener() {
              return ctx.changeMonth(-1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Anterior");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PlanificacionComponent_Template_button_click_10_listener() {
              return ctx.changeMonth(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Siguiente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PlanificacionComponent_li_13_Template, 3, 5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PlanificacionComponent_li_14_Template, 4, 4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 3, ctx.dateSelect, "MMMM, yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.week);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.monthSelect);
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
        styles: ["*[_ngcontent-%COMP%]{\r\n    outline: none !important\r\n  }\r\n\r\n  .mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .wrapper-calendar[_ngcontent-%COMP%]{\r\n    margin:1rem;\r\n    padding: .5rem;\r\n    border: solid 1px #eaeaea;\r\n    box-shadow: 0 0 10px #e4e4e4;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      width: 100%;\r\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n        Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n    }\r\n\r\n  ol[_ngcontent-%COMP%] {\r\n      list-style: none;\r\n      display: grid;\r\n      grid-template-columns: repeat(7, 1fr);\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n      padding: .25rem;\r\n      font-size: 25px;\r\n      cursor: pointer;\r\n    }\r\n\r\n  li[_ngcontent-%COMP%]:hover{\r\n      font-weight: 600;\r\n    }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n      margin-bottom: 4px;\r\n      padding: 0;\r\n    }\r\n\r\n  .first-day[_ngcontent-%COMP%] {\r\n      grid-column-start: var(--first-day-start, 0);\r\n    }\r\n\r\n  .day-name[_ngcontent-%COMP%] {\r\n      background: #eee;\r\n      font-weight: bold;\r\n      font-size: 12px;\r\n      margin-bottom: 2px;\r\n      padding: 4px;\r\n      text-align: center;\r\n    }\r\n\r\n  .header-calendar[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      align-content: center;\r\n    }\r\n\r\n  .header-calendar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      font-size: 30px;\r\n    }\r\n\r\n  .header-calendar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      \r\n      border: 0;\r\n    }\r\n\r\n  .plan[_ngcontent-%COMP%]{\r\n        display: block;\r\n        border-bottom:solid 1px black;\r\n    }\r\n\r\n  .op[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        display: block;\r\n        width: 100%;\r\n        background-color: rgb(200, 245, 200);\r\n        border: solid 1px white;\r\n        padding: 3px;\r\n        font-size: 10px;\r\n    }\r\n\r\n  .titulo[_ngcontent-%COMP%]{\r\n        display: block;\r\n        background-color: rgb(235, 235, 235);\r\n        font-size: 10px;\r\n    }\r\n\r\n  \r\n\r\n  \r\n\r\n  .op[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    width: 180px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    z-index:1;\r\n    top: -15px;\r\n    left: -30px;\r\n}\r\n\r\n  .op[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]{\r\n    visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbmlmaWNhY2lvbi9wbGFuaWZpY2FjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWDtvRUFDOEQ7SUFDaEU7O0VBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLHFDQUFxQztNQUNyQyxTQUFTO01BQ1QsVUFBVTtJQUNaOztFQUVBO01BQ0UsZUFBZTtNQUNmLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztFQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztFQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjs7RUFFQTtNQUNFLDRDQUE0QztJQUM5Qzs7RUFFQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UsV0FBVztNQUNYLGVBQWU7SUFDakI7O0VBRUE7TUFDRSxlQUFlO01BQ2YsbUNBQW1DO01BQ25DLFNBQVM7SUFDWDs7RUFFQTtRQUNJLGNBQWM7UUFDZCw2QkFBNkI7SUFDakM7O0VBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7UUFDWCxvQ0FBb0M7UUFDcEMsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixlQUFlO0lBQ25COztFQUVBO1FBQ0ksY0FBYztRQUNkLG9DQUFvQztRQUNwQyxlQUFlO0lBQ25COztFQUVKOzs7Ozs7Ozs7OztHQVdHOztFQUNIOzs7Ozs7Ozs7Ozs7OztDQWNDOztFQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7RUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BsYW5pZmljYWNpb24vcGxhbmlmaWNhY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxyXG4gIH1cclxuXHJcbiAgLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlci1jYWxlbmRhcntcclxuICAgIG1hcmdpbjoxcmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWFlYWVhO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2U0ZTRlNDtcclxuICB9XHJcbiAgXHJcbiAgZGl2IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgbGk6aG92ZXJ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpcnN0LWRheSB7XHJcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiB2YXIoLS1maXJzdC1kYXktc3RhcnQsIDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGF5LW5hbWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVyLWNhbGVuZGFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItY2FsZW5kYXIgaDEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVyLWNhbGVuZGFyIGJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGxhbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItYm90dG9tOnNvbGlkIDFweCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAub3B7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDI0NSwgMjAwKTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbi8qIC5pZHN7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MSwgMTgxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSAqL1xyXG4vKiAuaWRze1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzozcHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MSwgMTgxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiovXHJcbi5vcCAudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgbGVmdDogLTMwcHg7XHJcbn1cclxuLm9wOmhvdmVyIC50b29sdGlwe1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PlanificacionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-planificacion',
            templateUrl: './planificacion.component.html',
            styleUrls: ['./planificacion.component.css']
          }]
        }], function () {
          return [{
            type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VV2R":
    /*!********************************************************!*\
      !*** ./src/app/nuevo-pedido/nuevo-pedido.component.ts ***!
      \********************************************************/

    /*! exports provided: NuevoPedidoComponent */

    /***/
    function VV2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoPedidoComponent", function () {
        return NuevoPedidoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NuevoPedidoComponent = /*#__PURE__*/function () {
        function NuevoPedidoComponent() {
          _classCallCheck(this, NuevoPedidoComponent);
        }

        _createClass(NuevoPedidoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NuevoPedidoComponent;
      }();

      NuevoPedidoComponent.??fac = function NuevoPedidoComponent_Factory(t) {
        return new (t || NuevoPedidoComponent)();
      };

      NuevoPedidoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NuevoPedidoComponent,
        selectors: [["app-nuevo-pedido"]],
        decls: 2,
        vars: 0,
        template: function NuevoPedidoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLXBlZGlkby9udWV2by1wZWRpZG8uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NuevoPedidoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nuevo-pedido',
            templateUrl: './nuevo-pedido.component.html',
            styleUrls: ['./nuevo-pedido.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index/index.component */
      "aUdj");
      /* harmony import */


      var _index_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index/main/main.component */
      "pcFS");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _index_index_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index/index.module */
      "rSti");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _nuevo_pedido_nuevo_pedido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./nuevo-pedido/nuevo-pedido.component */
      "VV2R");
      /* harmony import */


      var _nuevo_pedido_nuevo_pedido_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./nuevo-pedido/nuevo-pedido.module */
      "RIPk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _producto_ymaquinaria_producto_ymaquinaria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./producto-ymaquinaria/producto-ymaquinaria.component */
      "DDDj");
      /* harmony import */


      var _producto_ymaquinaria_producto_ymaquinaria_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./producto-ymaquinaria/producto-ymaquinaria.module */
      "3ylV");
      /* harmony import */


      var _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./almacen/almacen.component */
      "RZrN");
      /* harmony import */


      var _almacen_almacen_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./almacen/almacen.module */
      "G20n");
      /* harmony import */


      var _orden_orden_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./orden/orden.component */
      "RaEd");
      /* harmony import */


      var _ordenes_ordenes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./ordenes/ordenes.module */
      "kvse");
      /* harmony import */


      var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./ordenes/ordenes.component */
      "RFuu");
      /* harmony import */


      var _planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./planificacion/planificacion.component */
      "ThZU");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common/locales/es */
      "2Yyj");
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_21__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20___default.a, 'es');

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'es'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _index_index_module__WEBPACK_IMPORTED_MODULE_6__["IndexModule"], _nuevo_pedido_nuevo_pedido_module__WEBPACK_IMPORTED_MODULE_9__["NuevoPedidoModule"], _producto_ymaquinaria_producto_ymaquinaria_module__WEBPACK_IMPORTED_MODULE_12__["ProductoYMaquinariaModule"], _almacen_almacen_module__WEBPACK_IMPORTED_MODULE_14__["AlmacenModule"], _ordenes_ordenes_module__WEBPACK_IMPORTED_MODULE_16__["OrdenesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], _index_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _nuevo_pedido_nuevo_pedido_component__WEBPACK_IMPORTED_MODULE_8__["NuevoPedidoComponent"], _producto_ymaquinaria_producto_ymaquinaria_component__WEBPACK_IMPORTED_MODULE_11__["ProductoYMaquinariaComponent"], _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_13__["AlmacenComponent"], _orden_orden_component__WEBPACK_IMPORTED_MODULE_15__["OrdenComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__["OrdenesComponent"], _planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_18__["PlanificacionComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _index_index_module__WEBPACK_IMPORTED_MODULE_6__["IndexModule"], _nuevo_pedido_nuevo_pedido_module__WEBPACK_IMPORTED_MODULE_9__["NuevoPedidoModule"], _producto_ymaquinaria_producto_ymaquinaria_module__WEBPACK_IMPORTED_MODULE_12__["ProductoYMaquinariaModule"], _almacen_almacen_module__WEBPACK_IMPORTED_MODULE_14__["AlmacenModule"], _ordenes_ordenes_module__WEBPACK_IMPORTED_MODULE_16__["OrdenesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], _index_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _nuevo_pedido_nuevo_pedido_component__WEBPACK_IMPORTED_MODULE_8__["NuevoPedidoComponent"], _producto_ymaquinaria_producto_ymaquinaria_component__WEBPACK_IMPORTED_MODULE_11__["ProductoYMaquinariaComponent"], _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_13__["AlmacenComponent"], _orden_orden_component__WEBPACK_IMPORTED_MODULE_15__["OrdenComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__["OrdenesComponent"], _planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_18__["PlanificacionComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _index_index_module__WEBPACK_IMPORTED_MODULE_6__["IndexModule"], _nuevo_pedido_nuevo_pedido_module__WEBPACK_IMPORTED_MODULE_9__["NuevoPedidoModule"], _producto_ymaquinaria_producto_ymaquinaria_module__WEBPACK_IMPORTED_MODULE_12__["ProductoYMaquinariaModule"], _almacen_almacen_module__WEBPACK_IMPORTED_MODULE_14__["AlmacenModule"], _ordenes_ordenes_module__WEBPACK_IMPORTED_MODULE_16__["OrdenesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
              useValue: 'es'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aUdj":
    /*!******************************************!*\
      !*** ./src/app/index/index.component.ts ***!
      \******************************************/

    /*! exports provided: IndexComponent */

    /***/
    function aUdj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var IndexComponent = /*#__PURE__*/function () {
        function IndexComponent() {
          _classCallCheck(this, IndexComponent);
        }

        _createClass(IndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IndexComponent;
      }();

      IndexComponent.??fac = function IndexComponent_Factory(t) {
        return new (t || IndexComponent)();
      };

      IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: IndexComponent,
        selectors: [["app-index"]],
        decls: 2,
        vars: 0,
        template: function IndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "eQ8z":
    /*!*************************************************************!*\
      !*** ./src/app/nuevo-pedido/nuevo-pedido-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NuevoPedidoRoutingModule */

    /***/
    function eQ8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoPedidoRoutingModule", function () {
        return NuevoPedidoRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nuevo_pedido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nuevo-pedido.component */
      "VV2R");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "RsYb");

      var routes = [{
        path: '',
        component: _nuevo_pedido_component__WEBPACK_IMPORTED_MODULE_3__["NuevoPedidoComponent"],
        children: [{
          path: '',
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
        }]
      }];

      var NuevoPedidoRoutingModule = function NuevoPedidoRoutingModule() {
        _classCallCheck(this, NuevoPedidoRoutingModule);
      };

      NuevoPedidoRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NuevoPedidoRoutingModule
      });
      NuevoPedidoRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NuevoPedidoRoutingModule_Factory(t) {
          return new (t || NuevoPedidoRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NuevoPedidoRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NuevoPedidoRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kvse":
    /*!*******************************************!*\
      !*** ./src/app/ordenes/ordenes.module.ts ***!
      \*******************************************/

    /*! exports provided: OrdenesModule */

    /***/
    function kvse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdenesModule", function () {
        return OrdenesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "O4wM");
      /* harmony import */


      var _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ordenes-routing.module */
      "IajX");
      /* harmony import */


      var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gestion/gestion.component */
      "JriP");

      var OrdenesModule = function OrdenesModule() {
        _classCallCheck(this, OrdenesModule);
      };

      OrdenesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: OrdenesModule
      });
      OrdenesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function OrdenesModule_Factory(t) {
          return new (t || OrdenesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdenesRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrdenesModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_4__["GestionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdenesRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdenesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_4__["GestionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdenesRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "m0jB":
    /*!************************************************!*\
      !*** ./src/app/almacen/main/main.component.ts ***!
      \************************************************/

    /*! exports provided: MainComponent */

    /***/
    function m0jB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pdfmake-wrapper */
      "oNuZ");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MainComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r34.Modal_Almacen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Nuevo Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r36.Nuevo_producto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Agregar Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r38.modal_Conversion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Hacer Conversi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r40.Modal_bobinas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Nueva Bobinas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r42.Modal_Mat_Nec();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Mat. Necesario (", ctx_r4.MAT_NECESARIO.length, ")");
        }
      }

      function MainComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r44.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Detallado");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r46.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Sencillo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " cargando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_24_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Descontar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_24_tr_22_td_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_24_tr_22_td_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r54);

            var bobina_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r52.descontar_bobina(bobina_r50._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Descontar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_24_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, MainComponent_div_24_tr_22_td_15_Template, 6, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var bobina_r50 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.Nbobina);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.material);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.peso);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.lote);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r50.convertidora);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r49.usuario.Almacen == 2);
        }
      }

      function MainComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Bobinas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Ancho de Bobina");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Peso");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Lote");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Convertidora");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, MainComponent_div_24_th_21_Template, 2, 0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MainComponent_div_24_tr_22_Template, 16, 8, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r8.usuario.Almacen == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r8.BOBINAS_);
        }
      }

      function MainComponent_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var conversion_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", conversion_r55.sort);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](conversion_r55.sort);
        }
      }

      function MainComponent_button_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_button_38_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r56.descontar_bobina_(ctx_r56._bobina_);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Descontar bobina");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_39_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_39_tr_14_td_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_39_tr_14_td_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r64);

            var Sustrato_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r62.eliminar_p(Sustrato_r60.material, Sustrato_r60.cantidad, Sustrato_r60._id, "sustrato");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_39_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MainComponent_div_39_tr_14_td_6_Template, 7, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Sustrato_r60 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Sustrato_r60.material);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Sustrato_r60.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r59.usuario.Almacen == 2);
        }
      }

      function MainComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Sustrato Convertido (Und.) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Materia Prima");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, MainComponent_div_39_th_12_Template, 2, 0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MainComponent_div_39_tr_14_Template, 7, 3, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r11.usuario.Almacen == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r11.Sustratos);
        }
      }

      function MainComponent_div_40_div_1_div_6_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Calibre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", producto_r73.ancho, " x ", producto_r73.largo, ") ");
        }
      }

      function MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate3"](" (", producto_r73.presentacion, " ", producto_r73.neto, "", producto_r73.unidad, ") ");
        }
      }

      function MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r73.calibre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r73.gramaje);
        }
      }

      function MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_4_Template, 2, 3, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_ng_container_7_Template, 5, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", producto_r73.material, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre === "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre != "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r73.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre === "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", producto_r73.neto * producto_r73.total, " ", producto_r73.unidad, "");
        }
      }

      function MainComponent_div_40_div_1_div_6_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_40_div_1_div_6_tr_12_ng_container_1_Template, 10, 7, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var producto_r73 = ctx.$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r73.grupo === seccion_r66.nombre);
        }
      }

      function MainComponent_div_40_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MainComponent_div_40_div_1_div_6_ng_container_8_Template, 5, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, MainComponent_div_40_div_1_div_6_tr_12_Template, 2, 1, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre === "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r67.TOTALES);
        }
      }

      function MainComponent_div_40_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" No hay ", seccion_r66.nombre, " en inventario ");
        }
      }

      function MainComponent_div_40_div_1_div_8_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Calibre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MainComponent_div_40_div_1_div_8_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", producto_r90.material.ancho, " x ", producto_r90.material.largo, ") ");
        }
      }

      function MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.material.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.material.calibre);
        }
      }

      function MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_td_17_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r99);

            var producto_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);

            return ctx_r97.Editar(producto_r90._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "i", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_ng_container_12_Template, 5, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_td_17_Template, 7, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", producto_r90.material.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.material.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate3"]("", producto_r90.material.presentacion, " ", producto_r90.material.neto, " ", producto_r90.material.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.codigo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.lote);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r90.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", producto_r90.material.neto * producto_r90.cantidad, " ", producto_r90.material.unidad, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r91.usuario.Almacen == 2);
        }
      }

      function MainComponent_div_40_div_1_div_8_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_40_div_1_div_8_tr_21_ng_container_1_Template, 18, 13, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var producto_r90 = ctx.$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r90.material.grupo.nombre === seccion_r66.nombre && producto_r90.cantidad > 0);
        }
      }

      function MainComponent_div_40_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Codigo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Lote");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MainComponent_div_40_div_1_div_8_ng_container_14_Template, 5, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "TOTAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, MainComponent_div_40_div_1_div_8_th_19_Template, 2, 0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, MainComponent_div_40_div_1_div_8_tr_21_Template, 2, 1, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r69.usuario.Almacen == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r69.Almacenado);
        }
      }

      function MainComponent_div_40_div_1_table_9_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MainComponent_div_40_div_1_table_9_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Cinta utiliz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MainComponent_div_40_div_1_table_9_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Calibre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }
      }

      function MainComponent_div_40_div_1_table_9_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", producto_r109.ancho, " x ", producto_r109.largo, ") ");
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r109.color);
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r109.cinta);
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r109.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r109.calibre);
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_td_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_td_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r122);

            var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);

            return ctx_r120.Editar_2(producto_r109._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "i", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_4_Template, 3, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_5_Template, 3, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_ng_container_10_Template, 5, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_td_11_Template, 7, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", producto_r109.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Tinta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Cajas Corrugadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](producto_r109.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate3"]("", producto_r109.presentacion, " ", producto_r109.neto, " ", producto_r109.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r110.usuario.Almacen == 2);
        }
      }

      function MainComponent_div_40_div_1_table_9_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_40_div_1_table_9_tr_14_ng_container_1_Template, 12, 10, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var producto_r109 = ctx.$implicit;

          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r109.grupo.nombre === seccion_r66.nombre);
        }
      }

      function MainComponent_div_40_div_1_table_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, MainComponent_div_40_div_1_table_9_ng_container_5_Template, 3, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MainComponent_div_40_div_1_table_9_ng_container_6_Template, 3, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, MainComponent_div_40_div_1_table_9_ng_container_11_Template, 5, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, MainComponent_div_40_div_1_table_9_th_12_Template, 2, 0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MainComponent_div_40_div_1_table_9_tr_14_Template, 2, 1, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Tinta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Cajas Corrugadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", seccion_r66.nombre == "Sustrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r70.usuario.Almacen == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r70.ALMACEN);
        }
      }

      function MainComponent_div_40_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MainComponent_div_40_div_1_div_6_Template, 13, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, MainComponent_div_40_div_1_div_7_Template, 4, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MainComponent_div_40_div_1_div_8_Template, 22, 3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, MainComponent_div_40_div_1_table_9_Template, 15, 5, "table", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r66 = ctx.$implicit;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", seccion_r66.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r65.resumido && ctx_r65.existencia_(seccion_r66.nombre) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r65.existencia_(seccion_r66.nombre) === false && ctx_r65._Almacenado);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r65.detallado && ctx_r65._Almacenado && !ctx_r65.loading && ctx_r65.existencia_(seccion_r66.nombre) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r65.detallado && !ctx_r65._Almacenado && !ctx_r65.loading && !ctx_r65._bobina);
        }
      }

      function MainComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_40_div_1_Template, 10, 5, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r12.SECCIONES);
        }
      }

      function MainComponent_div_41_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r130 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", seccion_r130.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](seccion_r130.nombre);
        }
      }

      function MainComponent_div_41_ng_container_22_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", producto_r131.ancho, " x ", producto_r131.largo, ") ");
        }
      }

      function MainComponent_div_41_ng_container_22_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, MainComponent_div_41_ng_container_22_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", producto_r131._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", producto_r131.nombre, " (", producto_r131.presentacion, " ", producto_r131.neto, "", producto_r131.unidad, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r131.ancho);
        }
      }

      function MainComponent_div_41_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_41_ng_container_22_ng_container_1_Template, 4, 6, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r131 = ctx.$implicit;

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r131.grupo.nombre === ctx_r129.product_selected);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      function MainComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_41_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r136.edit_almacen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Modificaci\xF3n de Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Categoria:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "select", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_div_41_Template_select_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r138.selecciona_producto($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MainComponent_div_41_option_14_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Producto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "select", 91, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_div_41_Template_select_change_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r139.producto_seleccionado($event.target.value);
          })("ngModelChange", function MainComponent_div_41_Template_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r140.AlmacenadoId.material._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MainComponent_div_41_ng_container_22_Template, 2, 1, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_41_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r141.codigoID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Lote");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_41_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r142.loteID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_41_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r143.cantidadID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_41_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r137);

            var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](21);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r144._Editar(_r128);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](10, _c0, ctx_r13.EDICION_ALMACEN));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx_r13.AlmacenadoId.material.grupo.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r13.SECCIONES);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r13.AlmacenadoId.material._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r13.ALMACEN);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r13.codigoID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r13.loteID)("disabled", !ctx_r13.codigoID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r13.cantidadID)("disabled", !ctx_r13.loteID);
        }
      }

      function MainComponent_div_42_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r149 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", seccion_r149._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](seccion_r149.nombre);
        }
      }

      function MainComponent_div_42_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Metros de cinta por caja");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_16_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r151);

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r150.MaterialID.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r146.MaterialID.color);
        }
      }

      function MainComponent_div_42_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_div_17_Template_input_click_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r152.define_color2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Negro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_div_17_Template_input_click_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r154.define_color2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Cyan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_div_17_Template_input_click_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r155.define_color2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Magenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_div_17_Template_input_click_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r156.define_color2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Amarillo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_div_17_Template_input_click_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r157.define_color2($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " Pantone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "input", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_17_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r153);

            var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r158.MaterialID.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r147.MaterialID.color);
        }
      }

      function MainComponent_div_42_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Ancho");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_18_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r160);

            var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r159.MaterialID.ancho = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Largo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_18_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r160);

            var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r161.MaterialID.largo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_18_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r160);

            var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r162.MaterialID.gramaje = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Calibre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_div_18_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r160);

            var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r163.MaterialID.calibre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r148.MaterialID.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r148.MaterialID.largo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r148.MaterialID.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r148.MaterialID.calibre);
        }
      }

      function MainComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r164.Modal_Almacen_ep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Editar Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " Grupo de Material ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "select", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_div_42_Template_select_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r166.Cambio_opciones($event.target.value);
          })("ngModelChange", function MainComponent_div_42_Template_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r167.MaterialID.grupo._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, MainComponent_div_42_option_15_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, MainComponent_div_42_div_16_Template, 8, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, MainComponent_div_42_div_17_Template, 33, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, MainComponent_div_42_div_18_Template, 28, 4, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r168.MaterialID.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r169.MaterialID.marca = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r170.MaterialID.presentacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "select", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_Template_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r171.MaterialID.unidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Kg.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Und.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "L.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_42_Template_input_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r172.MaterialID.neto = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_42_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r165);

            var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r173.Editar_Material_F();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](11, _c0, ctx_r14.Editar_NUEVO_PRODUCTO));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.grupo._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r14.SECCIONES);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r14.caja_);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r14.New_color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r14.New_Sustrato);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.marca);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.unidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r14.MaterialID.neto);
        }
      }

      function MainComponent_option_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r174 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", seccion_r174.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](seccion_r174.nombre);
        }
      }

      function MainComponent_ng_container_68_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" (", producto_r175.ancho, " x ", producto_r175.largo, ") ");
        }
      }

      function MainComponent_ng_container_68_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, MainComponent_ng_container_68_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", producto_r175._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate5"]("", producto_r175.nombre, " (", producto_r175.marca, " - ", producto_r175.presentacion, " ", producto_r175.neto, "", producto_r175.unidad, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r175.ancho);
        }
      }

      function MainComponent_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_ng_container_68_ng_container_1_Template, 4, 7, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r175 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", producto_r175.grupo.nombre === ctx_r17.product_selected);
        }
      }

      function MainComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_69_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r181);

            var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r180.codigo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Lote");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_69_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r181);

            var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r182.lote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_div_69_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r181);

            var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r183.cantidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r18.codigo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r18.lote)("disabled", !ctx_r18.codigo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r18.cantidad)("disabled", !ctx_r18.lote);
        }
      }

      function MainComponent_option_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var seccion_r184 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", seccion_r184._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](seccion_r184.nombre);
        }
      }

      function MainComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Nombre del Nuevo Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Metros de cinta por caja");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_91_Template_input_click_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r186);

            var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r185.define_color($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Negro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_91_Template_input_click_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r186);

            var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r187.define_color($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Cyan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_91_Template_input_click_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r186);

            var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r188.define_color($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Magenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_91_Template_input_click_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r186);

            var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r189.define_color($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Amarillo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_91_Template_input_click_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r186);

            var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r190.define_color($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " Pantone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Ancho");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Largo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Gramaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Calibre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_tr_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var bobina_r191 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r191.Nbobina);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r191.material);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r191.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r191.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bobina_r191.peso);
        }
      }

      function MainComponent_option_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var sustrato_r192 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", sustrato_r192);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](sustrato_r192);
        }
      }

      function MainComponent_option_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var gramaje_r193 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", gramaje_r193.gramaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](gramaje_r193.gramaje);
        }
      }

      function MainComponent_option_175_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ancho_r194 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ancho_r194.ancho);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ancho_r194.ancho);
        }
      }

      function MainComponent_ng_container_206_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r195 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", producto_r195[0]._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate4"]("", producto_r195[0].nombre, " - ", producto_r195[0].ancho, " x ", producto_r195[0].largo, " - Gram.", producto_r195[0].gramaje, "");
        }
      }

      function MainComponent_div_277_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " En estos momentos no hay solicitudes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MainComponent_div_278_tr_11_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var orden_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", (materiales_r198.cantidad * orden_r196.paginas / 1000).toFixed(2), "", ctx_r200.Unidad(materiales_r198.producto.nombre), " ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var orden_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", (materiales_r198.cantidad * orden_r196.paginas / 1000).toFixed(2), "", ctx_r201.Unidad(materiales_r198.producto.nombre), " ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var orden_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", (materiales_r198.cantidad * orden_r196.cantidad / 1000).toFixed(2), "", ctx_r202.Unidad(materiales_r198.producto.nombre), " ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var orden_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", ctx_r203.Caja_(orden_r196.cantidad / materiales_r198.cantidad, materiales_r198.producto.cinta), "", ctx_r203.Unidad(materiales_r198.producto.nombre), " ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", ctx_r204.cintas_, "", ctx_r204.Unidad(materiales_r198.producto.nombre), " ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_17_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var almacen_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate2"]("value", "", almacen_r216.codigo, "-", almacen_r216.lote, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate5"](" ", almacen_r216.codigo, " Lote ", almacen_r216.lote, " (", almacen_r216.material.presentacion, " ", almacen_r216.material.neto, "", almacen_r216.material.unidad, ") ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_278_tr_11_ng_container_17_option_1_Template, 2, 7, "option", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var almacen_r216 = ctx.$implicit;

          var materiales_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", almacen_r216.material.nombre == materiales_r198.producto.nombre && almacen_r216.material.marca == materiales_r198.producto.marca);
        }
      }

      function MainComponent_div_278_tr_11_ng_container_22_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_278_tr_11_ng_container_22_ng_container_1_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r224);

            var lote_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r222.borrarLote(lote_r220.lote);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var lote_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" Lote: ", lote_r220.lote, " x ", lote_r220.almacenado, "\xA0 ");
        }
      }

      function MainComponent_div_278_tr_11_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MainComponent_div_278_tr_11_ng_container_22_ng_container_1_Template, 5, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var lote_r220 = ctx.$implicit;

          var i_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", lote_r220.i == i_r199);
        }
      }

      function MainComponent_div_278_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, MainComponent_div_278_tr_11_ng_container_7_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MainComponent_div_278_tr_11_ng_container_8_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, MainComponent_div_278_tr_11_ng_container_9_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, MainComponent_div_278_tr_11_ng_container_10_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, MainComponent_div_278_tr_11_ng_container_11_Template, 2, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_div_278_tr_11_Template_select_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r228);

            var materiales_r198 = ctx.$implicit;
            var i_r199 = ctx.index;

            var orden_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r227.Lote($event.target.value, materiales_r198.producto.nombre, i_r199, orden_r196.paginas, materiales_r198.producto.grupo.nombre, orden_r196.cantidad, materiales_r198.cantidad, materiales_r198.cinta);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Seleccionar LOTE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, MainComponent_div_278_tr_11_ng_container_17_Template, 2, 1, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MainComponent_div_278_tr_11_ng_container_22_Template, 2, 1, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Fijar lote");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var materiales_r198 = ctx.$implicit;
          var i_r199 = ctx.index;

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", materiales_r198.producto.nombre, " ", materiales_r198.producto.marca, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", materiales_r198.producto.grupo.nombre == "Tinta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", materiales_r198.producto.grupo.nombre == "Barniz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", materiales_r198.producto.grupo.nombre == "Pega");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", materiales_r198.producto.grupo.nombre == "Cajas Corrugadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", materiales_r198.producto.grupo.nombre == "Cinta de Embalaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r197.Almacenado);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r197.LOTES);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" Lotes con descuento (", ctx_r197.cantidad_lotes(i_r199), ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("id", "Almacenados-", i_r199, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("id", "Necesario-", i_r199, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("id", "Almacenados-", i_r199, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("id", "Restante-", i_r199, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("id", "fijar_lote-", i_r199, "");
        }
      }

      function MainComponent_div_278_Template(rf, ctx) {
        if (rf & 1) {
          var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "table", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Resumen");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, MainComponent_div_278_tr_11_Template, 32, 15, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_div_278_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r231);

            var orden_r196 = ctx.$implicit;

            var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r230.Restar(orden_r196.sort);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var orden_r196 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](orden_r196.sort);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", orden_r196.producto.materiales[orden_r196.montaje]);
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(fb, api) {
          _classCallCheck(this, MainComponent);

          this.fb = fb;
          this.api = api;
          this.fileName = 'ExcelSheet.xlsx';
          this.resumido = false;
          this.detallado = true;
          this.NUEVO_PRODUCTO = false;
          this.PESO = 0;
          this.GRAMAJE = 300;
          this.ANCHO = 0;
          this.LARGO = 0;
          this.HOJAS = 0;
          this.PESO_ = 0;
          this.GRAMAJE_ = 300;
          this.ANCHO_ = 0;
          this.LARGO_ = 0;
          this.HOJAS_ = 0;
          this.empty = true;
          this.OTRO = true;
          this.CONVERSION = false;
          this.BOBINAS = false;
          this.CONSULTAB = false;
          this.boolean_sustrato = false;
          this.New_Sustrato = false;
          this.MATERIALES_NECESARIOS = false;
          this._NUEVO_PRODUCTO = false;
          this.EDICION_ALMACEN = false;
          this.DESCUENTOS = [];
          this.eliminacion = false;
          this.eliminar_sustrato = false;
          this.reporte = false;
          this.loading = true;
          this._bobina = false;
          this.descontar_b = false;
          this.codigoID = '';
          this.loteID = '';
          this.cantidadID = '';
          this.codigo = '';
          this.lote = '';
          this.cantidad = '';
          this.New_color = false;
          this.caja_ = false;
          this._Almacenado = true;
          this.Editar_NUEVO_PRODUCTO = false;
          this.TOTALES = [{
            material: null,
            marca: null,
            calibre: null,
            gramaje: null,
            total: null,
            grupo: null,
            presentacion: null,
            neto: null,
            unidad: null,
            ancho: null,
            largo: null
          }];
          this._bobina_ = '';
          this.LOTES = [];
          this.Almacenado = [];
          this.InventarioForm = this.fb.group({
            ancho: [''],
            largo: [''],
            gramaje: [''],
            calibre: [''],
            producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            marca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            presentacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            unidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            neto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: ['Negro', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cinta: [''],
            // codigo:['',Validators.required],
            // cantidad:['', Validators.required],
            // lote:['', Validators.required],
            NewControl: ['']
          });
          this.BobinaForm = this.fb.group({
            Nbobina: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            material: ['CARTON REV. BLANCO', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gramaje: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ancho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            peso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            convertidora: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this._sustratos_ = [];
          this._gramajes_ = [];
          this._ancho_ = [];
          this.SUSTRATO_CONVERSION = [];
          this.conversiones = [];
          this.usuario = api.usuario;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.BuscarAlmacen();
            this.getAalmacenado();
            this.BuscarGruposEnAlmacen(); // this.getSustratos();

            this.porConfirmar();
            this.totalizar_materiales();
            this.Gs = document.getElementById('selected').value;
            this.Buscar_conversiones();
            this.getbobinas();
          }
        }, {
          key: "define_color",
          value: function define_color(e) {
            if (e != 'Pantone') {
              this.InventarioForm.get('color').setValue(e);
              document.getElementById('color').value = e;
            } else {
              document.getElementById('color').value = '';
              document.getElementById('color').disabled = false;
            }
          }
        }, {
          key: "Modal_Almacen_ep",
          value: function Modal_Almacen_ep() {
            if (this.Editar_NUEVO_PRODUCTO) {
              this.Editar_NUEVO_PRODUCTO = false;
            } else {
              this.Editar_NUEVO_PRODUCTO = true;
            }
          }
        }, {
          key: "existencia_",
          value: function existencia_(seccion) {
            var existencia = this.Almacenado.find(function (x) {
              return x.material.grupo.nombre === seccion;
            });

            if (existencia) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "buscarSustratos",
          value: function buscarSustratos() {
            var _this44 = this;

            var sustratos = this.ALMACEN.filter(function (x) {
              return x.grupo.nombre == 'Sustrato';
            });

            var _loop3 = function _loop3(i) {
              var sustrato = _this44._sustratos_.find(function (x) {
                return x == sustratos[i].nombre;
              });

              if (!sustrato) {
                _this44._sustratos_.push(sustratos[i].nombre);
              }
            };

            for (var i = 0; i < sustratos.length; i++) {
              _loop3(i);
            }
          }
        }, {
          key: "buscarGramaje",
          value: function buscarGramaje(e) {
            var _this45 = this;

            this._gramajes_ = [];
            var sustratos = this.ALMACEN.filter(function (x) {
              return x.nombre == e;
            });

            var _loop4 = function _loop4(i) {
              var gramaje = _this45._gramajes_.find(function (x) {
                return x.gramaje == sustratos[i].gramaje;
              });

              if (!gramaje) {
                _this45._gramajes_.push(sustratos[i]);
              }
            };

            for (var i = 0; i < sustratos.length; i++) {
              _loop4(i);
            }

            console.log(this._gramajes_);
          }
        }, {
          key: "buscarAncho",
          value: function buscarAncho(e) {
            var _this46 = this;

            this._ancho_ = [];

            var sustratos = this._gramajes_.filter(function (x) {
              return x.gramaje == e;
            });

            var _loop5 = function _loop5(i) {
              var ancho = _this46._ancho_.find(function (x) {
                return x == sustratos[i].ancho;
              });

              if (!ancho) {
                _this46._ancho_.push(sustratos[i]);
              }
            };

            for (var i = 0; i < sustratos.length; i++) {
              _loop5(i);
            }
          }
        }, {
          key: "define_color2",
          value: function define_color2(e) {
            if (e != 'Pantone') {
              this.MaterialID.color = e;
            } else {
              document.getElementById('color').disabled = false;
              document.getElementById('color').value = '';
            }
          }
        }, {
          key: "Editar_2",
          value: function Editar_2(id) {
            var _this47 = this;

            this.Modal_Almacen_ep();
            this.api.getMaterialesID(id).subscribe(function (resp) {
              _this47.MaterialID = resp;

              if (resp.grupo.nombre === 'Tinta') {
                _this47.New_color = true;
              }

              if (resp.grupo.nombre === 'Cajas Corrugadas') {
                _this47.caja_ = true;
              }

              console.log(_this47.MaterialID, 'ok');
            });
          }
        }, {
          key: "Editar_Material_F",
          value: function Editar_Material_F() {
            var _this48 = this;

            var grupo = this.MaterialID.grupo._id;
            this.MaterialID.grupo = grupo;
            console.log(this.MaterialID);
            this.api.putMaterialID(this.MaterialID._id, this.MaterialID).subscribe(function (resp) {
              _this48.Modal_Almacen_ep();

              _this48.getAalmacenado();

              _this48.BuscarAlmacen();

              _this48.totalizar_materiales();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Material editado con exito!',
                showConfirmButton: false,
                timer: 1500
              });
            });
          }
        }, {
          key: "Editar",
          value: function Editar(id) {
            var _this49 = this;

            this.edit_almacen();
            this.api.getAlmacenadoID(id).subscribe(function (resp) {
              _this49.AlmacenadoId = resp;

              _this49.selecciona_producto(_this49.AlmacenadoId.material.grupo.nombre);

              _this49.codigoID = _this49.AlmacenadoId.codigo;
              _this49.loteID = _this49.AlmacenadoId.lote;
              _this49.cantidadID = _this49.AlmacenadoId.cantidad;
            });
          }
        }, {
          key: "_Editar",
          value: function _Editar(producto) {
            var _this50 = this;

            var body = {
              material: this.AlmacenadoId.material._id,
              codigo: this.codigoID,
              lote: this.loteID,
              cantidad: this.cantidadID
            };
            this.api.putAlmacenadoID(this.AlmacenadoId._id, body).subscribe(function (resp) {
              _this50.edit_almacen();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'El inventario fue editado con exito',
                showConfirmButton: false,
                timer: 1500
              });

              _this50.getAalmacenado();

              _this50.BuscarAlmacen();

              _this50.totalizar_materiales();

              _this50.codigoID = '';
              _this50.loteID = '';
              _this50.cantidadID = '';
              _this50.AlmacenadoId = '';
            });
          }
        }, {
          key: "edit_almacen",
          value: function edit_almacen() {
            if (this.EDICION_ALMACEN) {
              this.EDICION_ALMACEN = false;
            } else {
              this.EDICION_ALMACEN = true;
            }
          }
        }, {
          key: "Almacenes",
          value: function Almacenes(e) {
            if (e == 'Almacenada') {
              this._Almacenado = true;
              this._bobina = false;
            } else if (e == 'Bobinas') {
              this._Almacenado = false;
              this._bobina = true;
            } else {
              this._Almacenado = false;
              this._bobina = false;
            }
          }
        }, {
          key: "getAalmacenado",
          value: function getAalmacenado() {
            var _this51 = this;

            this.api.getAlmacenado().subscribe(function (resp) {
              _this51.Almacenado = resp;

              _this51.totalizar_materiales();
            });
          }
        }, {
          key: "Cambio_opciones",
          value: function Cambio_opciones(e) {
            if (e === 'otros') {
              this.OTRO = true;
            } else {
              this.OTRO = false;
              this.Gs = e;
            }

            if (e === '61f92a1f2126d717f004cca6') {
              this.New_Sustrato = true;
            } else {
              this.New_Sustrato = false;
            }

            if (e === '61fd54e2d9115415a4416f17') {
              this.New_color = true;
            } else {
              this.New_color = false;
            }

            if (e === '61fd7a8ed9115415a4416f74') {
              this.caja_ = true;
            } else {
              this.caja_ = false;
            }
          }
        }, {
          key: "Modal_Mat_Nec",
          value: function Modal_Mat_Nec() {
            if (this.MATERIALES_NECESARIOS) {
              this.MATERIALES_NECESARIOS = false;
            } else {
              this.MATERIALES_NECESARIOS = true;
            }
          }
        }, {
          key: "Nuevo_producto",
          value: function Nuevo_producto() {
            if (this._NUEVO_PRODUCTO) {
              this._NUEVO_PRODUCTO = false;
            } else {
              this._NUEVO_PRODUCTO = true;
            }
          }
        }, {
          key: "Modal_Almacen",
          value: function Modal_Almacen() {
            if (this.NUEVO_PRODUCTO) {
              this.NUEVO_PRODUCTO = false;
            } else {
              this.NUEVO_PRODUCTO = true;
            }
          }
        }, {
          key: "Modal_bobinas",
          value: function Modal_bobinas() {
            if (this.BOBINAS) {
              this.BOBINAS = false;
            } else {
              this.BOBINAS = true;
              this.buscarSustratos();
            }
          }
        }, {
          key: "modal_Conversion",
          value: function modal_Conversion() {
            if (this.CONVERSION) {
              this.CONVERSION = false;
            } else {
              this.CONVERSION = true;
            }
          }
        }, {
          key: "modal_reporte",
          value: function modal_reporte() {
            if (this.reporte) {
              this.reporte = false;
            } else {
              this.reporte = true;
            }
          }
        }, {
          key: "check_bobinas",
          value: function check_bobinas() {
            if (this.CONSULTAB) {
              this.CONSULTAB = false;
            } else {
              this.CONSULTAB = true;
            }
          }
        }, {
          key: "descontar_bobina",
          value: function descontar_bobina(bobina) {
            if (this.descontar_b) {
              this.descontar_b = false;
            } else {
              this.descontar_b = true;
              this.bobina__ = bobina;
            }
          }
        }, {
          key: "descontar_bobina_",
          value: function descontar_bobina_(numero) {
            var _this52 = this;

            var data = {
              bobina: this.bobina__,
              numero: numero
            };
            this.api.deleteBobina(data).subscribe(function (resp) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: resp,
                icon: 'info',
                showConfirmButton: false
              });

              _this52.getbobinas();

              _this52.descontar_bobina();

              _this52.Buscar_conversiones();
            });
          }
        }, {
          key: "BuscarGruposEnAlmacen",
          value: function BuscarGruposEnAlmacen() {
            var _this53 = this;

            this.loading = true;
            this.api.GetGrupoMp().subscribe(function (resp) {
              _this53.SECCIONES = resp;
              _this53.loading = false;
            });
          }
        }, {
          key: "BuscarAlmacen",
          value: function BuscarAlmacen() {
            var _this54 = this;

            this.loading = true;
            this.api.getAlmacen().subscribe(function (resp) {
              _this54.ALMACEN = resp.materiales;

              _this54.totalizar_materiales();

              _this54.loading = false;
            });
          }
        }, {
          key: "selecciona_producto",
          value: function selecciona_producto(e) {
            if (e == 0) {
              document.getElementById('Producto_select').disabled = true;
            } else {
              document.getElementById('Producto_select').disabled = false;
              this.product_selected = e;
            }
          }
        }, {
          key: "almacenar",
          value: function almacenar(producto) {
            var _this55 = this;

            var data = {
              material: producto.value,
              codigo: this.codigo,
              lote: this.lote,
              cantidad: this.cantidad
            };
            this.api.postAlmacenado(data).subscribe(function (resp) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Nueva materia prima agregada',
                showConfirmButton: false,
                timer: 1500
              });

              _this55.Nuevo_producto();

              _this55.BuscarAlmacen();

              _this55.getAalmacenado();

              _this55.codigo = '';
              _this55.lote = '';
              _this55.cantidad = '';
              document.getElementById('Nuevoproducto').value = "0";
            });
          }
        }, {
          key: "producto_seleccionado",
          value: function producto_seleccionado(e) {
            if (e == 0) {
              this._producto_seleccionado = false;
              this.codigo = '';
              this.lote = '';
              this.cantidad = '';
            } else {
              this._producto_seleccionado = true;
            }
          }
        }, {
          key: "Almacenar",
          value: function Almacenar() {
            var _this56 = this;

            var grupo;

            if (this.OTRO) {
              grupo = this.InventarioForm.get('NewControl').value;
            } else {
              grupo = this.Gs;
            }

            var data = {
              producto: this.InventarioForm.get('producto').value,
              marca: this.InventarioForm.get('marca').value,
              ancho: this.InventarioForm.get('ancho').value,
              largo: this.InventarioForm.get('largo').value,
              gramaje: this.InventarioForm.get('gramaje').value,
              calibre: this.InventarioForm.get('calibre').value,
              // cantidad: this.InventarioForm.get('cantidad').value,
              unidad: this.InventarioForm.get('unidad').value,
              presentacion: this.InventarioForm.get('presentacion').value,
              neto: this.InventarioForm.get('neto').value,
              color: this.InventarioForm.get('color').value,
              // codigo: this.InventarioForm.get('codigo').value,
              // lote: this.InventarioForm.get('lote').value,
              cinta: this.InventarioForm.get('cinta').value,
              grupo: grupo,
              nuevo: this.OTRO
            };
            console.log(this.InventarioForm.get('color').value);

            if (this.InventarioForm.invalid) {
              return;
            }

            this.api.PostAlmacen(data).subscribe(function (resp) {
              _this56.InventarioForm.reset();

              _this56.BuscarAlmacen();

              _this56.BuscarGruposEnAlmacen();

              _this56.Modal_Almacen(); // this.getSustratos();

            });
          }
        }, {
          key: "Peso",
          value: function Peso(e) {
            this.PESO = e.target.value;
            this.HOJAS = this.PESO * 10000000000;
            var otro = this.GRAMAJE * this.ANCHO * this.LARGO;
            this.HOJAS = this.HOJAS / otro;
            this.HOJAS = Math.trunc(this.HOJAS); // /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Gramaje",
          value: function Gramaje(e) {
            this.GRAMAJE = e;
            this.HOJAS = this.PESO * 10000000000;
            var otro = this.GRAMAJE * this.ANCHO * this.LARGO;
            this.HOJAS = this.HOJAS / otro;
            this.HOJAS = Math.trunc(this.HOJAS); //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Ancho",
          value: function Ancho(e) {
            this.ANCHO = e;
            this.HOJAS = this.PESO * 10000000000;
            var otro = this.GRAMAJE * this.ANCHO * this.LARGO;
            this.HOJAS = this.HOJAS / otro;
            this.HOJAS = Math.trunc(this.HOJAS); //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Largo",
          value: function Largo(e) {
            this.LARGO = e;
            this.HOJAS = this.PESO * 10000000000;
            var otro = this.GRAMAJE * this.ANCHO * this.LARGO;
            this.HOJAS = this.HOJAS / otro;
            this.HOJAS = Math.trunc(this.HOJAS); //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          } //  ***********************************************************

        }, {
          key: "Hojas_",
          value: function Hojas_(e) {
            this.HOJAS_ = e.target.value;
            var all = this.HOJAS_ * this.GRAMAJE_ * this.ANCHO_ * this.LARGO_;
            this.PESO_ = all / 10000000000; // /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Gramaje_",
          value: function Gramaje_(e) {
            this.GRAMAJE_ = e.target.value;
            var all = this.HOJAS_ * this.GRAMAJE_ * this.ANCHO_ * this.LARGO_;
            this.PESO_ = all / 10000000000; //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Ancho_",
          value: function Ancho_(e) {
            this.ANCHO_ = e.target.value;
            var all = this.HOJAS_ * this.GRAMAJE_ * this.ANCHO_ * this.LARGO_;
            this.PESO_ = all / 10000000000; //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          }
        }, {
          key: "Largo_",
          value: function Largo_(e) {
            this.LARGO_ = e.target.value;
            var all = this.HOJAS_ * this.GRAMAJE_ * this.ANCHO_ * this.LARGO_;
            this.PESO_ = all / 10000000000; //  /( this.GRAMAJE*this.ANCHO*this.LARGO)
          } //  ***********************************************************

        }, {
          key: "nuevaBobina",
          value: function nuevaBobina() {
            var _this57 = this;

            this.api.postNuevaBobina(this.BobinaForm.value).subscribe(function (resp) {
              _this57.BobinaForm.reset();

              _this57.Modal_bobinas();

              _this57.getbobinas();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Nueva Bobina Agregada!',
                text: 'Se agreg?? una nueva bobina al almacen de bobinas',
                icon: 'success',
                showConfirmButton: false
              });
            });
          }
        }, {
          key: "getbobinas",
          value: function getbobinas() {
            var _this58 = this;

            this.api.getBobina().subscribe(function (resp) {
              _this58.BOBINAS_ = resp;

              var _loop6 = function _loop6(i) {
                var bobina = _this58.BOBINAS_[i]; // bobinas
                // material
                // ancho
                // largo
                // material 
                // nombre
                // ancho
                // largo 

                var sustrato = _this58.ALMACEN.filter(function (x) {
                  return x.nombre == bobina.material && x.gramaje == bobina.gramaje && x.ancho == bobina.ancho;
                });

                if (sustrato) {
                  _this58.SUSTRATO_CONVERSION.push(sustrato);
                }
              };

              for (var i = 0; i < _this58.BOBINAS_.length; i++) {
                _loop6(i);
              }
            });
          }
        }, {
          key: "Buscar_conversiones",
          value: function Buscar_conversiones() {
            var _this59 = this;

            this.api.getConversiones().subscribe(function (resp) {
              _this59.conversiones = resp;
            });
          }
        }, {
          key: "Buscar_Bobina",
          value: function Buscar_Bobina(e) {
            var material = this.ALMACEN.find(function (x) {
              return x._id == e.target.value;
            });

            if (material) {
              document.getElementById('_gramaje').value = material.gramaje;
              document.getElementById('_ancho').value = material.ancho;
              document.getElementById('_largo').value = material.largo;
              this.Gramaje(material.gramaje);
              this.Ancho(material.ancho);
              this.Largo(material.largo); // if(TheBobina){
              // (<HTMLInputElement>document.getElementById('_ancho')).value = TheBobina.ancho
              // }
              // if(TheBobina){
              //   console.log(TheBobina)
              //   this.Mat_Selected = TheBobina.material;
              //   this.Num_Bobina = TheBobina.Nbobina;
              // }
            }
          }
        }, {
          key: "Generar_Conversion",
          value: function Generar_Conversion() {
            var _this60 = this;

            var sustrato = document.getElementById('bobina_selected').value;
            var peso = document.getElementById('_peso').value;
            var gramaje = document.getElementById('_gramaje').value;
            var ancho = document.getElementById('_ancho').value;
            var largo = document.getElementById('_largo').value;
            var observacion = document.getElementById('observacion').value;
            var convertidora = document.getElementById('convertidora').value;
            var Material = this.ALMACEN.find(function (x) {
              return x._id == sustrato;
            });
            var data = {
              material: Material.nombre,
              codigo: this.Num_Bobina,
              peso: peso,
              sustrato: Material.nombre,
              hojas: this.HOJAS
            };
            var solicitado = ['Jaime San Juan', 'Gerente de Operaciones', 'Poligr??fica Industrial, C.A.'];
            var hojas = data.hojas.toString();
            var hoy = moment__WEBPACK_IMPORTED_MODULE_5__().format('DD/MM/YYYY');
            this.api.postNuevoSustrato(data).subscribe(function (resp) {
              _this60.modal_Conversion();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Nueva Solicitud de Conversion Creada',
                text: "Su solicitud de conversion para ".concat(Material.nombre, ", fue realizada"),
                icon: 'success',
                showConfirmButton: false
              });

              function recibo() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var pdf;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["PdfMakeWrapper"]();
                          pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
                          pdf.pageOrientation('landscape');
                          _context2.t0 = pdf;
                          _context2.t1 = pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"];
                          _context2.t2 = pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"];
                          _context2.next = 8;
                          return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Img"]('../../assets/poli_cintillo.png').width(85).margin([35, 5]).build();

                        case 8:
                          _context2.t3 = _context2.sent;
                          _context2.t4 = new _context2.t2(_context2.t3).rowSpan(4).end;
                          _context2.t5 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("\n                SOLICITUD DE CONVERSI\xD3N").bold().end).alignment('center').fontSize(13).rowSpan(4).end;
                          _context2.t6 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('C??digo: FAL-002').end).fillColor('#dedede').fontSize(9).alignment('center').end;
                          _context2.t7 = [_context2.t4, _context2.t5, _context2.t6];
                          _context2.t8 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('N?? de Revisi??n: 0').end).fillColor('#dedede').fontSize(9).alignment('center').end];
                          _context2.t9 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('Fecha de Revision: 18/03/2022').end).fillColor('#dedede').fontSize(9).alignment('center').end];
                          _context2.t10 = [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('P??gina: 1 de 1').end).fillColor('#dedede').fontSize(9).alignment('center').end];
                          _context2.t11 = [_context2.t7, _context2.t8, _context2.t9, _context2.t10];
                          _context2.t12 = new _context2.t1(_context2.t11).widths(['25%', '50%', '25%']).end;

                          _context2.t0.add.call(_context2.t0, _context2.t12);

                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('CONVERTIDORA').end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](convertidora).end).end]]).widths(['30%', '70%']).end).alignment('center').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('CONVERSI??N').end).alignment('center').colSpan(2).color('#ffffff').fillColor('#000000').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('N??').margin([0, 6]).end).alignment('center').fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](resp).bold().end).fontSize(20).end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('FECHA DE SOLICITUD').end).alignment('center').fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(hoy)).margin([0, 6]).bold().end).end]]).widths(['30%', '70%']).end).alignment('center').end]]).widths(['45%', '15%', '40%']).layout('noBorders').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('MATERIAL').margin([0, 6]).bold().end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('GRAMAJE    (g/m??)').bold().end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('ANCHO DE BOBINA (cm)').bold().end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('CORTE (cm)').margin([0, 6]).bold().end).fillColor('#dedede').colSpan(2).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('').end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('PESO (t)').margin([0, 6]).bold().end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('HOJAS (und)').margin([0, 6]).bold().end).fillColor('#dedede').end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('OBSERVACI??N').margin([0, 6]).bold().end).fillColor('#dedede').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](data.sustrato).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](gramaje).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](ancho).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](ancho).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](largo).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](peso).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](hojas).color('red').end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](observacion).end).end]]).widths(['17%', '11%', '11%', '11%', '11%', '11%', '11%', '17%']).alignment('center').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('SOLICITADO POR:').color('#ffffff').end).fillColor('#000000').alignment('center').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Stack"](solicitado).end).alignment('center').end]]).widths(['100%']).end).end]]).widths(['60%', '40%']).layout('noBorders').alignment('center').end);
                          pdf.create().download();

                        case 26:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              recibo();
            });
          } // getSustratos(){
          //   this.api.getSustratos()
          //     .subscribe((resp:any)=>{
          //       console.log(resp)
          //       if(resp.length>0){
          //         this.boolean_sustrato = true;
          //         this.Sustratos = resp;
          //       }
          //     })

        }, {
          key: "totalizar",
          value: function totalizar(neto, cantidad) {
            var total = neto * cantidad;
            return total;
          }
        }, {
          key: "porConfirmar",
          value: function porConfirmar() {
            var _this61 = this;

            this.api.getMaterialesPorConfirmar().subscribe(function (resp) {
              _this61.MAT_NECESARIO = resp;
              console.log(_this61.MAT_NECESARIO, 'this');
            });
          }
        }, {
          key: "BuscarTotal",
          value: function BuscarTotal(Material, cantidad_Mat, cantidad_orden) {
            var El_Material = this.ALMACEN.find(function (x) {
              return x.nombre == Material;
            });
            var total_necesario = cantidad_Mat / 1000 * cantidad_orden;
            var Total_en_Presentacion = total_necesario / El_Material.neto;

            if (Total_en_Presentacion % 1 == 0) {
              if (Total_en_Presentacion < 1) {
                Total_en_Presentacion = 1;
              }

              return {
                total: Total_en_Presentacion,
                presentacion: El_Material.presentacion
              };
            } else {
              Total_en_Presentacion = Math.round(Total_en_Presentacion);

              if (Total_en_Presentacion < 1) {
                Total_en_Presentacion = 1;
              }

              return {
                total: Total_en_Presentacion,
                presentacion: El_Material.presentacion
              };
            }
          }
        }, {
          key: "Restar",
          value: function Restar(orden) {
            var _this62 = this;

            // let data = {descuento:this.DESCUENTOS, 
            //             orden:orden}
            // this.api.modificarMaterialTal(data)
            //   .subscribe((resp:any) => {
            //     this.Modal_Mat_Nec()
            //     this.BuscarAlmacen();
            //     this.porConfirmar();
            //   })
            var En_Almacen = this.MAT_NECESARIO[0].producto.materiales;
            var Cargados = this.LOTES.length;

            var _loop7 = function _loop7(i) {
              var existe = _this62.LOTES.find(function (x) {
                return x.i === i;
              });

              if (!existe) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Debes cubrir toda la materia prima para esta orden',
                  showConfirmButton: false,
                  timer: 1500
                });
                return {
                  v: void 0
                };
              }
            };

            for (var i = 0; i < En_Almacen.length; i++) {
              var _ret2 = _loop7(i);

              if (typeof _ret2 === "object") return _ret2.v;
            }

            var data = {
              lotes: this.LOTES,
              orden: orden
            };
            this.api.realizarDescuentoAlmacen(data).subscribe(function (resp) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'success',
                title: 'Excelente!',
                text: 'La nueva orden ya esta generada',
                showConfirmButton: false,
                timer: 1500
              });
              _this62.MATERIALES_NECESARIOS = false;

              _this62.BuscarAlmacen();

              _this62.porConfirmar();

              _this62.getAalmacenado();
            });
          }
        }, {
          key: "RestarMaterial",
          value: function RestarMaterial(material, total) {
            var data = {
              material: material.material,
              total: total
            };
            var Descuento = this.DESCUENTOS.find(function (x) {
              return x.material == material.material;
            });

            if (!Descuento) {
              this.DESCUENTOS.push(data);
            }
          }
        }, {
          key: "modal_eliminacion",
          value: function modal_eliminacion() {
            if (this.eliminacion) {
              this.eliminacion = false;
            } else {
              this.eliminacion = true;
            }
          }
        }, {
          key: "eliminar_p",
          value: function eliminar_p(nombre, cantidad, id, sustrato) {
            this.name_p_e = nombre;
            this.cantidad_p_e = cantidad;
            this.id_p_e = id;

            if (sustrato) {
              this.eliminar_sustrato = true;
            }

            this.modal_eliminacion();
          }
        }, {
          key: "confirmar_eliminacion",
          value: function confirmar_eliminacion(motivo) {
            var _this63 = this;

            motivo = motivo.value;

            if (this.eliminar_sustrato) {
              this.api.eliminarSustrato(this.id_p_e, motivo).subscribe(function (resp) {
                _this63.BuscarAlmacen();

                _this63.porConfirmar();

                _this63.modal_eliminacion();

                _this63.BuscarAlmacen();

                _this63.BuscarGruposEnAlmacen();

                _this63.getbobinas(); // this.getSustratos();


                _this63.porConfirmar();

                console.log(resp);
              });
            } else {
              this.api.eliminarMaterial(this.id_p_e, motivo).subscribe(function (resp) {
                console.log(resp);

                _this63.BuscarAlmacen();

                _this63.porConfirmar();

                _this63.modal_eliminacion();
              });
            }
          }
        }, {
          key: "descargarInventario",
          value: function descargarInventario(desde, hasta) {
            var _this64 = this;

            var data = {
              desde: desde.value,
              hasta: hasta.value
            };
            this.api.reporteInventario(data).subscribe(function (resp) {
              console.log('aqui es la broma:', resp);
              var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["PdfMakeWrapper"]();
              pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);

              function generarPDF() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var i, _i4, _i5;

                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](" Movimientos Realizados en el Almacen").end).alignment('center').end], [new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"](" Desde: ".concat(desde.value, " Hasta: ").concat(hasta.value)).end).alignment('center').end]]).widths(['100%']).layout('noBorders').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('PRODUCTOS EN ALMACEN').end).fillColor('#dedede').alignment('center').end]]).widths(['100%']).layout('noBorders').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("NOMBRE").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("PRESENTACI\xD3N").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("CANTIDAD").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("C\xD3DIGO").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("LOTE").end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);

                          for (i = 0; i < resp.almacen.length; i++) {
                            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.almacen[i].nombre)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.almacen[i].presentacion, " ").concat(resp.almacen[i].neto, " ").concat(resp.almacen[i].unidad)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.almacen[i].cantidad)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.almacen[i].codigo)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.almacen[i].lote)).end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);
                          }

                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('PRODUCTOS INGRESADOS EN LA FECHA ESTIPULADA').end).fillColor('#dedede').alignment('center').end]]).widths(['100%']).layout('noBorders').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("NOMBRE").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("PRESENTACI\xD3N").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("CANTIDAD").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("C\xD3DIGO").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("LOTE").end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);

                          for (_i4 = 0; _i4 < resp.ingresos.length; _i4++) {
                            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.ingresos[_i4].material.nombre)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.ingresos[_i4].material.presentacion, " ").concat(resp.ingresos[_i4].material.neto, " ").concat(resp.ingresos[_i4].material.unidad)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.ingresos[_i4].material.cantidad)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.ingresos[_i4].material.codigo)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.ingresos[_i4].material.lote)).end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);
                          }

                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('SALIDAS DEL ALMACEN').end).fillColor('#dedede').alignment('center').end]]).widths(['100%']).layout('noBorders').end);
                          pdf.add(pdf.ln(2));
                          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("NOMBRE").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("PRESENTACI\xD3N").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("CANTIDAD").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("RAZON").end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("FECHA").end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);

                          for (_i5 = 0; _i5 < resp.descuentos.length; _i5++) {
                            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.descuentos[_i5].material.nombre)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.descuentos[_i5].material.presentacion, " ").concat(resp.descuentos[_i5].material.neto, " ").concat(resp.descuentos[_i5].material.unidad)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.descuentos[_i5].descuento)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.descuentos[_i5].razon)).end).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Cell"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]("".concat(resp.descuentos[_i5].fecha.slice(0, 10))).end).end]]).widths(['20%', '20%', '20%', '20%', '20%']).end);
                          }

                          pdf.create().download();

                        case 17:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
              }

              generarPDF();

              _this64.modal_reporte();
            });
          }
        }, {
          key: "totalizar_materiales",
          value: function totalizar_materiales() {
            var _this65 = this;

            var _loop8 = function _loop8(i) {
              var existe = _this65.TOTALES.find(function (x) {
                return x.material == _this65.Almacenado[i].material.nombre && x.marca == _this65.Almacenado[i].material.marca;
              });

              if (existe) {
                var x = _this65.TOTALES.findIndex(function (x) {
                  return x.material == _this65.Almacenado[i].material.nombre && x.marca == _this65.Almacenado[i].material.marca;
                });

                _this65.TOTALES[x].total = Number(_this65.TOTALES[x].total);
                _this65.Almacenado[i].cantidad = Number(_this65.Almacenado[i].cantidad);
                _this65.Almacenado[i].neto = Number(_this65.Almacenado[i].material.neto);
                var def = _this65.Almacenado[i].neto * _this65.Almacenado[i].cantidad / _this65.TOTALES[x].neto;
                _this65.TOTALES[x].total = _this65.TOTALES[x].total + def;
              } else {
                _this65.TOTALES.push({
                  material: _this65.Almacenado[i].material.nombre,
                  marca: _this65.Almacenado[i].material.marca,
                  calibre: _this65.Almacenado[i].material.calibre,
                  gramaje: _this65.Almacenado[i].material.gramaje,
                  grupo: _this65.Almacenado[i].material.grupo.nombre,
                  presentacion: _this65.Almacenado[i].material.presentacion,
                  neto: _this65.Almacenado[i].material.neto,
                  unidad: _this65.Almacenado[i].material.unidad,
                  ancho: _this65.Almacenado[i].material.ancho,
                  largo: _this65.Almacenado[i].material.largo,
                  total: _this65.Almacenado[i].cantidad
                });

                console.log(_this65.TOTALES, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
              }
            };

            // material:null,
            // marca:null,
            // // total:null,
            // grupo:null,
            // presentacion:null,
            // neto:null,
            // unidad:null,
            // ancho:null,
            // largo:null
            for (var i = 0; i < this.Almacenado.length; i++) {
              _loop8(i);
            }
          } //   for(let i=0; i<this.ALMACEN.length; i++){
          //      let existe = this.TOTALES.find(x => x.material ==  this.ALMACEN[i].nombre && x.marca == this.ALMACEN[i].marca);
          //      if(existe){
          //       if(this.ALMACEN[i].grupo.nombre === 'Sustrato'){
          //         let Existe = this.TOTALES.find(x => x.ancho == this.ALMACEN[i].ancho && x.largo == this.ALMACEN[i].largo)
          //         if(Existe){
          //           let findIndex = this.TOTALES.findIndex(x => x.ancho == this.ALMACEN[i].ancho && x.largo == this.ALMACEN[i].largo && x.material ==  this.ALMACEN[i].nombre && x.marca == this.ALMACEN[i].marca)
          //           // let total = this.TOTALES[findIndex].total;
          //           let cantidad = this.ALMACEN[i].cantidad
          //           let Almacen = cantidad * this.ALMACEN[i].neto;
          //           this.TOTALES[findIndex].neto = this.TOTALES[findIndex].neto + Almacen
          //           // this.TOTALES[findIndex].total = 1;
          //           // console.log('HEREEEE ',this.TOTALES[findIndex], 'Almacen: ',this.ALMACEN[i])
          //         }else{
          //           this.TOTALES.push({
          //             material:this.ALMACEN[i].nombre,
          //             marca:this.ALMACEN[i].marca,
          //             // total:this.ALMACEN[i].cantidad,
          //             grupo:this.ALMACEN[i].grupo.nombre,
          //             presentacion:this.ALMACEN[i].presentacion,
          //             neto:this.ALMACEN[i].neto,
          //             unidad:this.ALMACEN[i].unidad,
          //             // ancho:this.ALMACEN[i].ancho,
          //             // largo:this.ALMACEN[i].largo
          //           })
          //         }
          //         // else{
          //         //   let findIndex = this.TOTALES.findIndex(x => x.material ==  this.ALMACEN[i].nombre && x.marca == this.ALMACEN[i].marca)
          //         // let total = this.TOTALES[findIndex].total;
          //         // let cantidad = this.ALMACEN[i].cantidad
          //         // if(this.ALMACEN[i].neto != this.TOTALES[findIndex].neto){
          //         //   let NewNETO = this.ALMACEN[i].neto / this.TOTALES[findIndex].neto
          //         //   cantidad = this.ALMACEN[i].cantidad * NewNETO;
          //         // }
          //         // this.TOTALES[findIndex].total = total + cantidad;
          //         // }
          //       }else{
          //         let findIndex = this.TOTALES.findIndex(x => x.material ==  this.ALMACEN[i].nombre && x.marca == this.ALMACEN[i].marca)
          //         // let total = this.TOTALES[findIndex].total;
          //         let cantidad = this.ALMACEN[i].cantidad
          //         if(this.ALMACEN[i].neto != this.TOTALES[findIndex].neto){
          //           let NewNETO = this.ALMACEN[i].neto / this.TOTALES[findIndex].neto
          //           cantidad = this.ALMACEN[i].cantidad * NewNETO;
          //         }
          //         this.TOTALES[findIndex].total = total + cantidad;
          //       }
          //      }else{
          //        this.TOTALES.push({
          //          material:this.ALMACEN[i].nombre,
          //          marca:this.ALMACEN[i].marca,
          //         //  total:this.ALMACEN[i].cantidad,
          //          grupo:this.ALMACEN[i].grupo.nombre,
          //          presentacion:this.ALMACEN[i].presentacion,
          //          neto:this.ALMACEN[i].neto,
          //          unidad:this.ALMACEN[i].unidad,
          //          ancho:this.ALMACEN[i].ancho,
          //          largo:this.ALMACEN[i].largo
          //        })
          //      }
          //   }
          // }

        }, {
          key: "changeView",
          value: function changeView() {
            if (this.resumido) {
              this.resumido = false;
              this.detallado = true;
            } else {
              this.resumido = true;
              this.detallado = false;
            }
          }
        }, {
          key: "seleccion_inventario",
          value: function seleccion_inventario(material, marca) {
            var materiales_en_almacen = [];

            for (var i = 0; i < this.ALMACEN.length; i++) {
              if (this.ALMACEN[i].nombre == material && this.ALMACEN[i].marca == marca) {
                materiales_en_almacen.push({
                  nombre: this.ALMACEN[i].nombre,
                  marca: this.ALMACEN[i].marca
                });
              }
            }

            return materiales_en_almacen;
          }
        }, {
          key: "Caja_",
          value: function Caja_(caja, cinta) {
            caja = Math.ceil(caja);
            this.cintas_ = Number(cinta * caja);
            return caja;
          }
        }, {
          key: "caja",
          value: function caja(cajas) {
            this.caja_ = cajas;
          }
        }, {
          key: "Lote",
          value: function Lote(e, material, i, hojas, grupo, cantidad, m_cantidad, cinta) {
            var _this66 = this;

            var splited = e.split('-');
            e = splited[1];
            var codigo = splited[0];
            console.log(splited);
            var EnAlmacen = this.Almacenado.find(function (x) {
              return x.material.nombre === material && x.lote === e && x.codigo === codigo;
            }); // console.log('******/*/*/*/*/*/*/*/*/*/*/', cantidad)

            console.log(this.MAT_NECESARIO);

            var _cantidad;

            if (grupo === 'Tinta') {
              _cantidad = m_cantidad * hojas / 1000;
            } else if (grupo === 'Barniz') {
              _cantidad = m_cantidad * hojas / 1000;
            } else if (grupo === 'Pega') {
              _cantidad = m_cantidad * cantidad / 1000;
            } else if (grupo === 'Cajas Corrugadas') {
              _cantidad = cantidad / m_cantidad;
              cinta = cinta * _cantidad;
            } else if (grupo === 'Cinta de Embalaje') {
              _cantidad = this.cintas_;
            }

            var unidad_necesaria = _cantidad / EnAlmacen.material.neto; // alert(_cantidad)
            // alert(EnAlmacen.material.neto)

            unidad_necesaria = Math.ceil(unidad_necesaria);
            EnAlmacen.cantidad = Math.trunc(EnAlmacen.cantidad);
            var previo = this.LOTES.filter(function (x) {
              return x.i === i;
            });

            if (EnAlmacen.material.grupo.nombre === 'Sustrato') {
              unidad_necesaria = hojas;
            }

            if (previo.length > 0) {
              if (previo[previo.length - 1].restante) {
                unidad_necesaria = previo[previo.length - 1].restante;
              }
            }

            document.getElementById("Necesario-".concat(i)).innerHTML = "".concat(unidad_necesaria, " ").concat(EnAlmacen.material.presentacion, "(s) necesaria(s)");
            document.getElementById("Almacenados-".concat(i)).innerHTML = "".concat(EnAlmacen.cantidad, " ").concat(EnAlmacen.material.presentacion, "(s) En Almacen");
            var restante = EnAlmacen.cantidad - unidad_necesaria;
            restante = Math.trunc(restante);
            var cantidad_solicitada;

            if (restante < 0) {
              restante = Math.abs(restante);
              document.getElementById("Restante-".concat(i)).innerHTML = "\n      <b>Faltan: </b>".concat(restante, " <br>\n      ");
              document.getElementById("fijar_lote-".concat(i)).style.display = "block";
              var check = document.getElementById("fijar_lote-".concat(i));
              cantidad_solicitada = EnAlmacen.cantidad;

              check.onclick = function () {
                return _this66.fijalote(e, codigo, 0, i, EnAlmacen.cantidad * EnAlmacen.material.neto, restante, cantidad_solicitada);
              }; // <input type="checkbox" (click)='fijalote(${e},${EnAlmacen.cantidad})'> Fijar lote

            } else {
              document.getElementById("fijar_lote-".concat(i)).style.display = "none";
              document.getElementById("Restante-".concat(i)).innerHTML = "<b>Restan: </b>".concat(restante, " ").concat(EnAlmacen.material.presentacion, "(s) En Almacen");
              cantidad_solicitada = EnAlmacen.cantidad - restante;
              var existe = this.LOTES.find(function (x) {
                return x.lote === e;
              });

              if (!existe) {
                this.LOTES.push({
                  lote: e,
                  codigo: codigo,
                  resta: restante,
                  i: i,
                  almacenado: EnAlmacen.cantidad,
                  solicitado: cantidad_solicitada
                });
              } else {
                this.LOTES.push({
                  lote: e,
                  codigo: codigo,
                  resta: restante,
                  i: i,
                  almacenado: EnAlmacen.cantidad,
                  solicitado: cantidad_solicitada
                }); //  let index = this.LOTES.findIndex(x => x.lote === e)
                //  this.LOTES.splice(index , 1);
              }

              console.log(this.LOTES);
            }
          }
        }, {
          key: "fijalote",
          value: function fijalote(lote, codigo, resto, i, almacenado, restante, solicitado) {
            var existe = this.LOTES.find(function (x) {
              return x.lote == lote;
            });

            if (!existe) {
              this.LOTES.push({
                lote: lote,
                codigo: codigo,
                resta: resto,
                i: i,
                almacenado: almacenado,
                restante: restante,
                solicitado: solicitado
              });
              console.log(this.LOTES);
            } else {
              var index = this.LOTES.findIndex(function (x) {
                return x.lote == lote;
              });
              this.LOTES.push({
                lote: lote,
                codigo: codigo,
                resta: resto,
                i: i,
                almacenado: almacenado,
                restante: restante,
                solicitado: solicitado
              });
            }

            console.log(this.LOTES);
          }
        }, {
          key: "Unidad",
          value: function Unidad(material) {
            var unidad = this.ALMACEN.find(function (x) {
              return x.nombre === material;
            });
            return unidad.unidad;
          }
        }, {
          key: "cantidad_lotes",
          value: function cantidad_lotes(x) {
            var lotes = this.LOTES.length;
            var total = 0;

            for (var i = 0; i < lotes; i++) {
              if (this.LOTES[i].i == x) {
                total++;
              }
            }

            return total;
          }
        }, {
          key: "existencia",
          value: function existencia(x) {
            var lotes = this.LOTES.length;
            var existencia = 0;

            for (var i = 0; i < lotes; i++) {
              if (this.LOTES[i].i == x) {
                existencia = existencia + this.LOTES[i].almacenado;
              }
            }

            return existencia;
          }
        }, {
          key: "borrarLote",
          value: function borrarLote(lote) {
            var index = this.LOTES.findIndex(function (x) {
              return x.lote === lote;
            });
            this.LOTES.splice(index, 1);
          }
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 317,
        vars: 65,
        consts: [[1, "card"], [1, "card-content"], [1, "titulo"], ["class", "button is-primary", 3, "click", 4, "ngIf"], [1, "field"], [1, "select"], [3, "change"], ["value", "Almacenada"], ["value", "Materiales"], ["value", "Bobinas"], ["class", "button is-success", 3, "click", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-body"], [1, "subtitulo"], [1, "label"], ["name", "", "id", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "columns"], [1, "column"], ["name", "", "id", "Nuevoproducto", 3, "change"], ["value", "0"], ["name", "", "id", "Producto_select", "disabled", "", 3, "change"], ["producto", ""], [4, "ngFor", "ngForOf"], ["class", "columns", 4, "ngIf"], [1, "button", "is-primary", 3, "disabled", "click"], ["autocomplete", "on", 3, "formGroup", "ngSubmit"], ["id", "selected", "value", "otros", 3, "change"], ["value", "otros"], ["class", "column", 4, "ngIf"], ["class", "Tinta", 4, "ngIf"], ["class", "sustrato", 4, "ngIf"], [1, "control"], ["type", "text", "formControlName", "producto", 1, "input"], ["type", "text", "formControlName", "marca", 1, "input"], [1, "column", "is-3"], ["type", "text", "formControlName", "presentacion", 1, "input"], [1, "field", "has-addons"], ["formControlName", "unidad"], ["value", "Kg"], ["value", "Und"], ["value", "L"], ["type", "text", "placeholder", "Neto por unidad", "formControlName", "neto", 1, "input"], [1, "button", "is-primary"], [1, "table", "is-fullwidth"], ["type", "text", "formControlName", "Nbobina", 1, "input"], ["name", "", "id", "", "formControlName", "material", 3, "change"], ["name", "", "id", "", "formControlName", "gramaje", 3, "change"], ["name", "", "id", "", "formControlName", "ancho"], ["type", "text", "formControlName", "peso", 1, "input"], ["type", "text", "formControlName", "lote", 1, "input"], ["type", "text", "formControlName", "convertidora", 1, "input"], [1, "separador"], ["id", "bobina_selected", 3, "change"], ["value", "null"], ["type", "number", "value", "0", "id", "_peso", 1, "input", 3, "change"], ["type", "number", "value", "0", "id", "_gramaje", "disabled", "", 1, "input", 3, "change"], ["type", "number", "value", "0", "id", "_ancho", "disabled", "", 1, "input", 3, "change"], ["type", "number", "value", "0", "id", "_largo", "disabled", "", 1, "input", 3, "change"], ["type", "text", "placeholder", "convertidora", "id", "convertidora", 1, "input"], ["id", "observacion", "placeholder", "Observacion", 1, "textarea"], [1, "button", "is-primary", 3, "click"], ["type", "number", "value", "0", 1, "input", 3, "change"], ["type", "number", "value", "300", 1, "input", 3, "change"], ["class", "materiales", 4, "ngFor", "ngForOf"], ["placeholder", "Motivo de eliminaci\xF3n", 1, "textarea"], ["motivo", ""], [1, "button", "is-danger", 3, "click"], ["type", "date"], ["desde", ""], ["hasta", ""], [1, "button", "is-success", 3, "click"], [1, "loading"], [1, "icon"], [1, "fa-solid", "fa-loader"], [1, "button", "is-danger", "is-outlined", "is-small", 3, "click"], [1, "icon", "is-small"], [1, "fas", "fa-times"], [3, "value"], ["class", "card animate__animated animate__fadeIn", 4, "ngFor", "ngForOf"], [1, "card", "animate__animated", "animate__fadeIn"], ["class", "table is-fullwidth", 4, "ngIf"], [1, "mensaje"], [1, "fa-solid", "fa-cart-flatbed-empty"], [1, "button", "is-success", "is-outlined", "is-small", 3, "click"], [1, "fas", "fa-pencil-alt"], ["name", "", "id", "", 3, "value", "change"], ["name", "", "id", "Producto_select", 3, "ngModel", "change", "ngModelChange"], ["type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "input", 3, "ngModel", "disabled", "ngModelChange"], ["id", "selected", "name", "grupo", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "name", "material", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "marca", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "presentacion", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "unidad", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Neto por unidad", "name", "neto", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Metros de cinta por caja", 1, "input", 3, "ngModel", "ngModelChange"], [1, "Tinta"], [1, "column", "is-4"], ["type", "radio", "name", "color", "id", "Negro", "value", "Negro", "checked", "", 3, "click"], ["type", "radio", "name", "color", "id", "Cyan", "value", "Cyan", 3, "click"], ["type", "radio", "name", "color", "id", "Magenta", "value", "Magenta", 3, "click"], ["type", "radio", "name", "color", "id", "Amarillo", "value", "Amarillo", 3, "click"], ["type", "radio", "name", "color", "id", "Pantone", "value", "Pantone", 3, "click"], [1, "column", "is-5"], ["type", "text", "value", "Negro", "id", "color", "name", "color", "disabled", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "sustrato"], ["type", "number", "name", "ancho", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "largo", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "gramaje", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "calibre", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "NewControl", 1, "input"], ["type", "number", "placeholder", "Metros de cinta por caja", "formControlName", "cinta", 1, "input"], ["type", "text", "value", "Negro", "id", "color", "formControlName", "color", "disabled", "", 1, "input"], ["type", "number", "formControlName", "ancho", 1, "input"], ["type", "number", "formControlName", "largo", 1, "input"], ["type", "number", "formControlName", "gramaje", 1, "input"], ["type", "number", "formControlName", "calibre", 1, "input"], [1, "empty"], [1, "materiales"], [1, "table", "is-fullwidth", "is-striped"], [1, "material"], ["id", "", 3, "change"], ["value", "#"], [1, "resumen"], [1, "Inf_lotes"], [1, "informacion"], [3, "id"], [1, "fijar_lote", 3, "id"], ["id", "boton_add"], [3, "value", 4, "ngIf"], [1, "icon", "has-text-danger", 3, "click"], [1, "fas", "fa-backspace"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Almacen");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, MainComponent_button_4_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, MainComponent_button_5_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MainComponent_button_6_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, MainComponent_button_7_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MainComponent_button_8_Template, 2, 1, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_13_listener($event) {
              return ctx.Almacenes($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Materiales Registrados ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Bobinas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, MainComponent_button_21_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, MainComponent_button_22_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, MainComponent_div_23_Template, 6, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, MainComponent_div_24_Template, 23, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_26_listener() {
              return ctx.descontar_bobina();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Descontar Bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "N\xB0 de Conversi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MainComponent_Template_select_ngModelChange_36_listener($event) {
              return ctx._bobina_ = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](37, MainComponent_option_37_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, MainComponent_button_38_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, MainComponent_div_39_Template, 15, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, MainComponent_div_40_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, MainComponent_div_41_Template, 44, 12, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, MainComponent_div_42_Template, 54, 13, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_44_listener() {
              return ctx.Nuevo_producto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Ingreso de Inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Categoria:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_55_listener($event) {
              return ctx.selecciona_producto($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Selecciona Categoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](58, MainComponent_option_58_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Producto:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "select", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_64_listener($event) {
              return ctx.producto_seleccionado($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Selecciona Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](68, MainComponent_ng_container_68_Template, 2, 1, "ng-container", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](69, MainComponent_div_69_Template, 19, 5, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_button_click_70_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r232);

              var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](65);

              return ctx.almacenar(_r16);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Finalizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_73_listener() {
              return ctx.Modal_Almacen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Nuevo Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_78_listener() {
              return ctx.Almacenar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, " Grupo de Material ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_85_listener($event) {
              return ctx.Cambio_opciones($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](86, MainComponent_option_86_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Nuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](89, MainComponent_div_89_Template, 6, 0, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](90, MainComponent_div_90_Template, 8, 0, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](91, MainComponent_div_91_Template, 33, 0, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](92, MainComponent_div_92_Template, 28, 0, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "Marca");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "Presentaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "select", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "Kg.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Und.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "L.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Finalizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_129_listener() {
              return ctx.check_bobinas();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Bobinas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "table", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Gramaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "Ancho de Bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "peso");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](146, MainComponent_tr_146_Template, 11, 5, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_148_listener() {
              return ctx.Modal_bobinas();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_151_listener() {
              return ctx.nuevaBobina();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Nueva Bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Numero de bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](157, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "select", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_162_listener($event) {
              return ctx.buscarGramaje($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](163, MainComponent_option_163_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "Gramaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_168_listener($event) {
              return ctx.buscarAncho($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](169, MainComponent_option_169_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Ancho de bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "select", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](175, MainComponent_option_175_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, "Peso");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](179, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "Lote");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](183, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "Convertidora");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Nueva Bobina");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_191_listener() {
              return ctx.modal_Conversion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "Conversi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, " De peso a Hojas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](198, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "select", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_select_change_203_listener($event) {
              return ctx.Buscar_Bobina($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "option", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Selecciona Sustrato");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](206, MainComponent_ng_container_206_Template, 3, 5, "ng-container", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Peso (t)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_211_listener($event) {
              return ctx.Peso($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Gramaje (g/m\xB2)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_216_listener($event) {
              return ctx.Gramaje($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Ancho (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "input", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_221_listener($event) {
              return ctx.Ancho($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "Largo (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "input", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_226_listener($event) {
              return ctx.Largo($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](227, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Convertidora");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](231, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Observaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](235, "textarea", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Cantidad Hojas: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_button_click_242_listener() {
              return ctx.Generar_Conversion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Generar una Conversi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, " De Hojas a Peso ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](246, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "Cantidad (Hojas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_251_listener($event) {
              return ctx.Hojas_($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Gramaje (g/m\xB2)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_256_listener($event) {
              return ctx.Gramaje_($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Ancho (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_261_listener($event) {
              return ctx.Ancho_($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Largo (cm)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function MainComponent_Template_input_change_266_listener($event) {
              return ctx.Largo_($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](267, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "Peso: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_274_listener() {
              return ctx.Modal_Mat_Nec();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](277, MainComponent_div_277_Template, 3, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](278, MainComponent_div_278_Template, 15, 2, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_280_listener() {
              return ctx.modal_eliminacion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "Razon de Eliminacion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](289, "textarea", 69, 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_button_click_291_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r232);

              var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](290);

              return ctx.confirmar_eliminacion(_r31);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Eliminar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_div_click_294_listener() {
              return ctx.modal_reporte();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "h1", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "Resumen De Inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](299, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Desde:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](306, "input", 72, 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, "Hasta:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](313, "input", 72, 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MainComponent_Template_button_click_315_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r232);

              var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](307);

              var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](314);

              return ctx.descargarInventario(_r32, _r33);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "Descargar inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx._bobina && ctx.usuario.Almacen == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx._bobina && ctx.usuario.Almacen == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx._bobina && ctx.usuario.Almacen == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx._bobina && ctx.usuario.Almacen == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.usuario.Almacen == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.resumido && ctx._Almacenado);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.detallado && ctx._Almacenado);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx._bobina);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](47, _c0, ctx.descontar_b));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx._bobina_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.conversiones);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx._bobina_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.boolean_sustrato);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.loading && !ctx._bobina);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.EDICION_ALMACEN);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.MaterialID);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](49, _c0, ctx._NUEVO_PRODUCTO));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.SECCIONES);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.ALMACEN);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx._producto_seleccionado);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.cantidad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](51, _c0, ctx.NUEVO_PRODUCTO));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.InventarioForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.SECCIONES);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.OTRO);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.caja_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.New_color);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.New_Sustrato);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](53, _c0, ctx.CONSULTAB));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.BOBINAS_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](55, _c0, ctx.BOBINAS));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.BobinaForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx._sustratos_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx._gramajes_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx._ancho_);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](57, _c0, ctx.CONVERSION));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.SUSTRATO_CONVERSION);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.HOJAS, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.PESO_, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](59, _c0, ctx.MATERIALES_NECESARIOS));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.MAT_NECESARIO.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.MAT_NECESARIO);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](61, _c0, ctx.eliminacion));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.name_p_e, " x ", ctx.cantidad_p_e, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](63, _c0, ctx.reporte));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from{\r\n        transform:rotate(0deg)\r\n    }\r\n    to{\r\n        transform:rotate(360deg)\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    from{\r\n        transform:rotate(0deg)\r\n    }\r\n    to{\r\n        transform:rotate(360deg)\r\n    }\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n\r\n.empty[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding:5px;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: large;\r\n    background-color: rgb(247, 147, 147);\r\n}\r\n\r\n.mensaje[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding:5px;\r\n    color: rgb(240, 132, 132);\r\n    text-align: center;\r\n    font-size: large;\r\n    background-color: rgb(248, 220, 220);\r\n}\r\n\r\n.loading[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding:30px;\r\n    background-color: rgb(169, 238, 186);\r\n    text-align: center;\r\n    font-size: large;\r\n    color: white;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n\r\n.separador[_ngcontent-%COMP%]{\r\n    display: block;\r\n    background-color: black;\r\n    border-radius: 5px;\r\n    color: white;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.informacion[_ngcontent-%COMP%]{\r\n    margin-top:-69px;\r\n    box-sizing: border-box;\r\n    visibility: hidden;\r\n    width: 230px;\r\n    height: 60px;\r\n    background-color: black;\r\n    border-radius: 5px;\r\n    color: white;\r\n    padding: 10px;\r\n    z-index: 100;\r\n}\r\n\r\n.Inf_lotes[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.Inf_lotes[_ngcontent-%COMP%]:hover   .informacion[_ngcontent-%COMP%]{\r\n    visibility: visible\r\n}\r\n\r\n.fijar_lote[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n\r\n#boton_add[_ngcontent-%COMP%]{\r\n    color:black\r\n}\r\n\r\n#boton_add[_ngcontent-%COMP%]:hover{\r\n    color:rgb(79, 196, 64);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxtYWNlbi9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBaUQ7QUFDckQ7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFQQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FsbWFjZW4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvUm9ib3RvL1JvYm90by1CbGFjay50dGYpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgZnJvbXtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpXHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZylcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuLmVtcHR5e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDE0NywgMTQ3KTtcclxufVxyXG5cclxuLm1lbnNhamV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBjb2xvcjogcmdiKDI0MCwgMTMyLCAxMzIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIyMCwgMjIwKTtcclxufVxyXG5cclxuLmxvYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjM4LCAxODYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnN1YnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLm10LTV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3J7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmluZm9ybWFjaW9ue1xyXG4gICAgbWFyZ2luLXRvcDotNjlweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5JbmZfbG90ZXM6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5JbmZfbG90ZXM6aG92ZXIgLmluZm9ybWFjaW9ue1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG59XHJcblxyXG4uZmlqYXJfbG90ZXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuI2JvdG9uX2FkZHtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuXHJcbiNib3Rvbl9hZGQ6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZ2IoNzksIDE5NiwgNjQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n6ga":
    /*!**********************************************!*\
      !*** ./src/app/services/rest-api.service.ts ***!
      \**********************************************/

    /*! exports provided: RestApiService */

    /***/
    function n6ga(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestApiService", function () {
        return RestApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/usuario.model */
      "11oC");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RestApiService = /*#__PURE__*/function () {
        function RestApiService(http, router) {
          _classCallCheck(this, RestApiService);

          this.http = http;
          this.router = router;
          this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        }

        _createClass(RestApiService, [{
          key: "token",
          get: function get() {
            return localStorage.getItem('token') || '';
          }
        }, {
          key: "headers",
          get: function get() {
            return {
              'Authorization': this.token
            };
          } // **************************************************************************
          // **************************** MAQUINAS ************************************
          // ************************************************************************** 

        }, {
          key: "GetMaquinas",
          value: function GetMaquinas() {
            var url = "".concat(this.api_url, "/maquinas");
            return this.http.get(url);
          }
        }, {
          key: "PostMaquinas",
          value: function PostMaquinas(data) {
            var url = "".concat(this.api_url, "/maquinas");
            return this.http.post(url, data);
          }
        }, {
          key: "DeleteMaquinas",
          value: function DeleteMaquinas(id) {
            var url = "".concat(this.api_url, "/maquinas/").concat(id);
            return this.http["delete"](url);
          } // **************************************************************************
          // **************************** GRUPOS **************************************
          // **************************************************************************

        }, {
          key: "getGrupos",
          value: function getGrupos() {
            var url = "".concat(this.api_url, "/grupos");
            return this.http.get(url);
          }
        }, {
          key: "PostGrupos",
          value: function PostGrupos(data) {
            var url = "".concat(this.api_url, "/grupos");
            return this.http.post(url, data);
          } // ****************************************************************************
          // **************************** CLIENTES **************************************
          // ****************************************************************************

        }, {
          key: "GetClientes",
          value: function GetClientes() {
            var url = "".concat(this.api_url, "/clientes");
            return this.http.get(url);
          }
        }, {
          key: "PostClientes",
          value: function PostClientes(data) {
            var url = "".concat(this.api_url, "/clientes");
            return this.http.post(url, data);
          } // ****************************************************************************
          // **************************** Almacen ***************************************
          // ****************************************************************************

        }, {
          key: "getAlmacen",
          value: function getAlmacen() {
            var url = "".concat(this.api_url, "/materiales");
            return this.http.get(url);
          }
        }, {
          key: "GetGrupoMp",
          value: function GetGrupoMp() {
            var url = "".concat(this.api_url, "/tipo-materia-prima");
            return this.http.get(url);
          }
        }, {
          key: "PostAlmacen",
          value: function PostAlmacen(data) {
            var url = "".concat(this.api_url, "/nuevo-material");
            return this.http.post(url, data);
          } // ****************************************************************************
          // **************************** Productos *************************************
          // ****************************************************************************

        }, {
          key: "postProducto",
          value: function postProducto(data) {
            var url = "".concat(this.api_url, "/nuevo-producto");
            return this.http.post(url, data);
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var url = "".concat(this.api_url, "/productos/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "getOneById",
          value: function getOneById(id) {
            var url = "".concat(this.api_url, "/producto/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "getFechas",
          value: function getFechas(id) {
            var url = "".concat(this.api_url, "/trabajos/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "postOrden",
          value: function postOrden(data) {
            var url = "".concat(this.api_url, "/orden");
            return this.http.post(url, data);
          }
        }, {
          key: "postOrden2",
          value: function postOrden2(data) {
            var url = "".concat(this.api_url, "/trabajos");
            return this.http.post(url, data);
          }
        }, {
          key: "getOrdenById",
          value: function getOrdenById(id) {
            var url = "".concat(this.api_url, "/orden/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "getOrden",
          value: function getOrden() {
            var url = "".concat(this.api_url, "/orden");
            return this.http.get(url);
          }
        }, {
          key: "getTrabajos",
          value: function getTrabajos() {
            var url = "".concat(this.api_url, "/trabajos");
            return this.http.get(url);
          }
        }, {
          key: "getEstado",
          value: function getEstado(id) {
            var url = "".concat(this.api_url, "/orden/etapa/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "getInfToday",
          value: function getInfToday(fecha) {
            var url = "".concat(this.api_url, "/gestion");
            return this.http.post(url, fecha);
          }
        }, {
          key: "postGestion",
          value: function postGestion(data) {
            var url = "".concat(this.api_url, "/gestiones");
            return this.http.post(url, data);
          }
        }, {
          key: "getGestiones",
          value: function getGestiones() {
            var url = "".concat(this.api_url, "/gestiones");
            return this.http.get(url);
          }
        }, {
          key: "postRestrasar",
          value: function postRestrasar(data) {
            var url = "".concat(this.api_url, "/trabajos/retrasar");
            return this.http.post(url, data);
          }
        }, {
          key: "postAcelerar",
          value: function postAcelerar(data) {
            var url = "".concat(this.api_url, "/trabajos/acelerar");
            return this.http.post(url, data);
          }
        }, {
          key: "postNuevaBobina",
          value: function postNuevaBobina(data) {
            var url = "".concat(this.api_url, "/bobina");
            return this.http.post(url, data);
          }
        }, {
          key: "deleteBobina",
          value: function deleteBobina(data) {
            var url = "".concat(this.api_url, "/bobina-delete");
            return this.http.post(url, data);
          }
        }, {
          key: "getBobina",
          value: function getBobina() {
            var url = "".concat(this.api_url, "/bobina");
            return this.http.get(url);
          }
        }, {
          key: "postNuevoSustrato",
          value: function postNuevoSustrato(data) {
            var url = "".concat(this.api_url, "/sustrato");
            return this.http.post(url, data);
          }
        }, {
          key: "getSustratos",
          value: function getSustratos() {
            var url = "".concat(this.api_url, "/sustrato");
            return this.http.get(url);
          }
        }, {
          key: "getConversiones",
          value: function getConversiones() {
            var url = "".concat(this.api_url, "/conversiones");
            return this.http.get(url);
          }
        }, {
          key: "Login",
          value: function Login(data) {
            var url = "".concat(this.api_url, "/login");
            return this.http.post(url, data);
          }
        }, {
          key: "validarToken",
          value: function validarToken() {
            var _this67 = this;

            return this.http.get("".concat(this.api_url, "/renew"), {
              headers: this.headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
              var _resp$usuario = resp.usuario,
                  estado = _resp$usuario.estado,
                  _id = _resp$usuario._id,
                  Nombre = _resp$usuario.Nombre,
                  Apellido = _resp$usuario.Apellido,
                  Correo = _resp$usuario.Correo,
                  Departamento = _resp$usuario.Departamento,
                  Role = _resp$usuario.Role,
                  Nueva_orden = _resp$usuario.Nueva_orden,
                  Consulta = _resp$usuario.Consulta,
                  Almacen = _resp$usuario.Almacen,
                  Maquinaria = _resp$usuario.Maquinaria,
                  Planificacion = _resp$usuario.Planificacion,
                  Gestiones = _resp$usuario.Gestiones;
              _this67.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"](estado, _id, Nombre, Apellido, Correo, Departamento, Role, Nueva_orden, Consulta, Almacen, Maquinaria, Planificacion, Gestiones);
              localStorage.setItem('token', resp.token);
              localStorage.setItem('menu', JSON.stringify(resp.menu));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
              return true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('menu');
            this.router.navigateByUrl('login');
          }
        }, {
          key: "getMaterialesPorConfirmar",
          value: function getMaterialesPorConfirmar() {
            var url = "".concat(this.api_url, "/orden_material");
            return this.http.get(url);
          }
        }, {
          key: "modificarMaterialTal",
          value: function modificarMaterialTal(data) {
            var url = "".concat(this.api_url, "/material/descuento");
            return this.http.post(url, data);
          }
        }, {
          key: "eliminarMaterial",
          value: function eliminarMaterial(id, motivo) {
            var url = "".concat(this.api_url, "/materiales/").concat(id);
            var data = {
              motivo: motivo
            };
            return this.http.post(url, data);
          }
        }, {
          key: "eliminarSustrato",
          value: function eliminarSustrato(id, motivo) {
            var url = "".concat(this.api_url, "/sustratos/").concat(id);
            var data = {
              motivo: motivo
            };
            return this.http.post(url, data);
          }
        }, {
          key: "reporteInventario",
          value: function reporteInventario(data) {
            var url = "".concat(this.api_url, "/materialess/reporte");
            return this.http.post(url, data);
          }
        }, {
          key: "realizarDescuentoAlmacen",
          value: function realizarDescuentoAlmacen(data) {
            var url = "".concat(this.api_url, "/material/descuento");
            return this.http.post(url, data);
          }
        }, {
          key: "postAlmacenado",
          value: function postAlmacenado(data) {
            var url = "".concat(this.api_url, "/almacenado");
            return this.http.post(url, data);
          }
        }, {
          key: "getAlmacenado",
          value: function getAlmacenado() {
            var url = "".concat(this.api_url, "/almacenado");
            return this.http.get(url);
          }
        }, {
          key: "getAlmacenadoID",
          value: function getAlmacenadoID(id) {
            var url = "".concat(this.api_url, "/almacenado/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "putAlmacenadoID",
          value: function putAlmacenadoID(id, body) {
            var url = "".concat(this.api_url, "/almacenado/").concat(id);
            return this.http.put(url, body);
          }
        }, {
          key: "getMaterialesID",
          value: function getMaterialesID(id) {
            var url = "".concat(this.api_url, "/materiales/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "putMaterialID",
          value: function putMaterialID(id, body) {
            var url = "".concat(this.api_url, "/material/").concat(id);
            return this.http.put(url, body);
          }
        }, {
          key: "getMaquinaID",
          value: function getMaquinaID(id) {
            var url = "".concat(this.api_url, "/maquinas/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "putMaquina",
          value: function putMaquina(id, body) {
            var url = "".concat(this.api_url, "/maquinas/").concat(id);
            return this.http.put(url, body);
          }
        }, {
          key: "deleteGrupo",
          value: function deleteGrupo(id) {
            var url = "".concat(this.api_url, "/grupo/").concat(id);
            return this.http["delete"](url);
          }
        }, {
          key: "getMaquinasByOrdens",
          value: function getMaquinasByOrdens(id) {
            var url = "".concat(this.api_url, "/maquina-orden/").concat(id);
            return this.http.get(url);
          }
        }, {
          key: "updateProducto",
          value: function updateProducto(data, id) {
            var url = "".concat(this.api_url, "/producto/").concat(id);
            return this.http.post(url, data);
          }
        }]);

        return RestApiService;
      }();

      RestApiService.??fac = function RestApiService_Factory(t) {
        return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RestApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: RestApiService,
        factory: RestApiService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RestApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nR/L":
    /*!***********************************************!*\
      !*** ./src/app/index/index-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: IndexRoutingModule */

    /***/
    function nRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function () {
        return IndexRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main/main.component */
      "pcFS");
      /* harmony import */


      var _index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index.component */
      "aUdj");

      var routes = [{
        path: '',
        component: _index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        children: [{
          path: '',
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
        }]
      }];

      var IndexRoutingModule = function IndexRoutingModule() {
        _classCallCheck(this, IndexRoutingModule);
      };

      IndexRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: IndexRoutingModule
      });
      IndexRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function IndexRoutingModule_Factory(t) {
          return new (t || IndexRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IndexRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "p4/K":
    /*!*************************************************************!*\
      !*** ./src/app/producto-ymaquinaria/main/main.component.ts ***!
      \*************************************************************/

    /*! exports provided: MainComponent */

    /***/
    function p4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 11,
        vars: 0,
        consts: [[1, "hero", "is-small", "is-primary"], [1, "container"], [1, "columns", "menu"], [1, "column"], ["src", "../../../assets/BANNER-PRODUCTOS.png", "alt", "", "routerLink", "/gestiones/productos"], ["src", "../../../assets/BANNER-MAQUINARIA.png", "alt", "", "routerLink", "/gestiones/maquinaria"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.divider[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 15px;\r\n    background-color: rgb(28,40,49);\r\n    position: relative;\r\n}\r\n\r\n.custom-shape-divider-bottom-1626714317[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.custom-shape-divider-bottom-1626714317[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    width: calc(100% + 1.3px);\r\n    height: 52px;\r\n}\r\n\r\n.custom-shape-divider-bottom-1626714317[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%] {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    left: 45%;\r\n    top: 20%;\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.imagen3[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('materiales.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.imagen3[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('materiales.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image4[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('PEGADORA-BOBST1.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image4[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('PEGADORA-BOBST1.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]{\r\n    height: 270px;\r\n    background-image: url('BANNER-SIO-1092x270-v03.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 270px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8teW1hcXVpbmFyaWEvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYjswQ0FDb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJOzBDQUNvRDtJQUNwRCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYjsrQ0FDeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJOytDQUN5RDtJQUN6RCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9EQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvLXltYXF1aW5hcmlhL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmKTtcclxufVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCw0MCw0OSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jdXN0b20tc2hhcGUtZGl2aWRlci1ib3R0b20tMTYyNjcxNDMxNyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uY3VzdG9tLXNoYXBlLWRpdmlkZXItYm90dG9tLTE2MjY3MTQzMTcgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmN1c3RvbS1zaGFwZS1kaXZpZGVyLWJvdHRvbS0xNjI2NzE0MzE3IC5zaGFwZS1maWxsIHtcclxuICAgIGZpbGw6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuLmltYWdlbjN7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNDIsMTcsMjksMC40MDM3OTkwMTk2MDc4NDMxNSkgMCUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzAzKSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvbWF0ZXJpYWxlcy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1hZ2VuMzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzApIDAlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvbWF0ZXJpYWxlcy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlNHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAwJSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMDMpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9QRUdBRE9SQS1CT0JTVDEuanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmltYWdlNDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzApIDAlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvUEVHQURPUkEtQk9CU1QxLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXQtNXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN1YnRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmhlcm97XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0JBTk5FUi1TSU8tMTA5MngyNzAtdjAzLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjcwcHg7XHJcbn1cclxuXHJcbi5tZW51IGltZzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCBibGFjazsgKi9cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pcFS":
    /*!**********************************************!*\
      !*** ./src/app/index/main/main.component.ts ***!
      \**********************************************/

    /*! exports provided: MainComponent */

    /***/
    function pcFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MainComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MainComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(api) {
          _classCallCheck(this, MainComponent);

          this.api = api;
          this.usuario = api.usuario;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.usuario);
          }
        }, {
          key: "getOrdenes",
          value: function getOrdenes() {}
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 9,
        vars: 6,
        consts: [[1, "hero", "is-small", "is-primary"], [1, "container", "mt-5", "animate__animated", "animate__fadeIn"], [1, "columns", "menu"], ["class", "column", 4, "ngIf"], [1, "column"], ["src", "../../../assets/BANNER-NUEVA-ORDEN.png", "alt", "", "routerLink", "/orden"], ["src", "../../../assets/BANNER-ALMACEN.png", "routerLink", "/almacen"], ["src", "../../../assets/BANNER-PRODUCTOS-Y-MAQUINARIA.png", "routerLink", "/gestiones"], ["src", "../../../assets/BANNER-CONSULTA.png", "routerLink", "/ordenes"], ["src", "../../../assets/BANNER-GESTIONES.png", "routerLink", "/ordenes/gestion"], ["src", "../../../assets/BANNER-PLANIFICACION.png", "routerLink", "/planificacion"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MainComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MainComponent_div_4_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MainComponent_div_5_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MainComponent_div_6_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MainComponent_div_7_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MainComponent_div_8_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Nueva_orden != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Almacen != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Maquinaria != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Consulta != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Gestiones != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.usuario.Planificacion != 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["@font-face {\r\n    font-family: Roboto;\r\n    src: url('Roboto-Black.ttf');\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]{\r\n    height: 270px;\r\n    background-image: url('BANNER-SIO-1092x270-v03.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 270px;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    left: 45%;\r\n    top: 20%;\r\n    font-size: 50px;\r\n    font-family: Roboto;\r\n}\r\n\r\n.imagen[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('button.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.imagen[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('button.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.imagen3[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('materiales.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.imagen3[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('materiales.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image4[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('PEGADORA-BOBST1.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image4[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('PEGADORA-BOBST1.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('banner2.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('banner2.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image5[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('planificacion.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image5[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('planificacion.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image6[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 200px;\r\n    background: radial-gradient(circle, rgba(142,17,29,0.40379901960784315) 0%, rgba(28,40,49,0.8379726890756303) 100%),\r\n    url('organization.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.image6[_ngcontent-%COMP%]:hover{\r\n    background: radial-gradient(circle, rgba(28,40,49,0.837972689075630) 0%, rgba(142,17,29,0.40379901960784315) 100%),\r\n    url('organization.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.grande[_ngcontent-%COMP%]{\r\n    width: 115%;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9EQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7c0NBQ2dEO0lBQ2hELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTtzQ0FDZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7MENBQ29EO0lBQ3BELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTswQ0FDb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7K0NBQ3lEO0lBQ3pELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTsrQ0FDeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7dUNBQ2lEO0lBQ2pELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTt1Q0FDaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7NkNBQ3VEO0lBQ3ZELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTs2Q0FDdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2I7NENBQ3NEO0lBQ3RELHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTs0Q0FDc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJsYWNrLnR0Zik7XHJcbn1cclxuXHJcbi5oZXJve1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9CQU5ORVItU0lPLTEwOTJ4MjcwLXYwMy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI3MHB4O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLmltYWdlbntcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAwJSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMDMpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9idXR0b24uanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmltYWdlbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzApIDAlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvYnV0dG9uLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2VuM3tcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAwJSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMDMpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9tYXRlcmlhbGVzLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZW4zOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMCkgMCUsIHJnYmEoMTQyLDE3LDI5LDAuNDAzNzk5MDE5NjA3ODQzMTUpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9tYXRlcmlhbGVzLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2U0e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTQyLDE3LDI5LDAuNDAzNzk5MDE5NjA3ODQzMTUpIDAlLCByZ2JhKDI4LDQwLDQ5LDAuODM3OTcyNjg5MDc1NjMwMykgMTAwJSksXHJcbiAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL1BFR0FET1JBLUJPQlNUMS5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1hZ2U0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMCkgMCUsIHJnYmEoMTQyLDE3LDI5LDAuNDAzNzk5MDE5NjA3ODQzMTUpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9QRUdBRE9SQS1CT0JTVDEuanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAwJSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMDMpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIyLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzApIDAlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvYmFubmVyMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlNXtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE0MiwxNywyOSwwLjQwMzc5OTAxOTYwNzg0MzE1KSAwJSwgcmdiYSgyOCw0MCw0OSwwLjgzNzk3MjY4OTA3NTYzMDMpIDEwMCUpLFxyXG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9wbGFuaWZpY2FjaW9uLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZTU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI4LDQwLDQ5LDAuODM3OTcyNjg5MDc1NjMwKSAwJSwgcmdiYSgxNDIsMTcsMjksMC40MDM3OTkwMTk2MDc4NDMxNSkgMTAwJSksXHJcbiAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL3BsYW5pZmljYWNpb24uanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZTZ7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNDIsMTcsMjksMC40MDM3OTkwMTk2MDc4NDMxNSkgMCUsIHJnYmEoMjgsNDAsNDksMC44Mzc5NzI2ODkwNzU2MzAzKSAxMDAlKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvb3JnYW5pemF0aW9uLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZTY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI4LDQwLDQ5LDAuODM3OTcyNjg5MDc1NjMwKSAwJSwgcmdiYSgxNDIsMTcsMjksMC40MDM3OTkwMTk2MDc4NDMxNSkgMTAwJSksXHJcbiAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL29yZ2FuaXphdGlvbi5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5tdC01e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3VidGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uZ3JhbmRle1xyXG4gICAgd2lkdGg6IDExNSU7XHJcbn1cclxuXHJcbi5tZW51IGltZzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCBibGFjazsgKi9cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rSti":
    /*!***************************************!*\
      !*** ./src/app/index/index.module.ts ***!
      \***************************************/

    /*! exports provided: IndexModule */

    /***/
    function rSti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexModule", function () {
        return IndexModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _index_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-routing.module */
      "nR/L");

      var IndexModule = function IndexModule() {
        _classCallCheck(this, IndexModule);
      };

      IndexModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: IndexModule
      });
      IndexModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function IndexModule_Factory(t) {
          return new (t || IndexModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IndexModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _orden_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orden/orden.component */
      "RaEd");
      /* harmony import */


      var _planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./planificacion/planificacion.component */
      "ThZU");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Auth/auth-guard.guard */
      "I1LG");

      var routes = [{
        path: '',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./index/index.module */
          "rSti")).then(function (m) {
            return m.IndexModule;
          });
        }
      }, {
        path: 'orden-produccion/:id',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _orden_orden_component__WEBPACK_IMPORTED_MODULE_3__["OrdenComponent"]
      }, {
        path: 'orden',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./nuevo-pedido/nuevo-pedido.module */
          "RIPk")).then(function (m) {
            return m.NuevoPedidoModule;
          });
        }
      }, {
        path: 'gestiones',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./producto-ymaquinaria/producto-ymaquinaria.module */
          "3ylV")).then(function (m) {
            return m.ProductoYMaquinariaModule;
          });
        }
      }, {
        path: 'almacen',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./almacen/almacen.module */
          "G20n")).then(function (m) {
            return m.AlmacenModule;
          });
        }
      }, {
        path: 'ordenes',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./ordenes/ordenes.module */
          "kvse")).then(function (m) {
            return m.OrdenesModule;
          });
        }
      }, {
        path: 'planificacion',
        canActivate: [_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_4__["PlanificacionComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/rest-api.service */
      "n6ga");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "is-loading": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, fb, api) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.fb = fb;
          this.api = api;
          this.cargando = false;
          this.correo = '';
          this.email = '';
          this.formSubmitted = false;
          this.loginForm = this.fb.group({
            Correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: [false]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            this.email = localStorage.getItem('correo') || '';

            if (this.email.length > 2) {
              (_a = this.loginForm.get('remember')) === null || _a === void 0 ? void 0 : _a.patchValue(true);
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this68 = this;

            var _a, _b; //Agregar clase de cargar a boton


            this.cargando = true;

            if (((_a = this.loginForm.get('remember')) === null || _a === void 0 ? void 0 : _a.value) === true) {
              this.correo = (_b = this.loginForm.get('Correo')) === null || _b === void 0 ? void 0 : _b.value;
              localStorage.setItem('correo', this.correo);
            } else {
              localStorage.removeItem('correo');
            }

            this.api.Login(this.loginForm.value).subscribe(function (resp) {
              localStorage.setItem('token', resp.token);

              _this68.router.navigateByUrl('/');
            }, function (err) {
              _this68.cargando = false;
              console.log(err);
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', err.error.err.message, 'error');
            }); // console.log(this.loginForm.value)
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 18,
        vars: 5,
        consts: [[1, "fondo"], [1, "login"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["src", "../../assets/LOGIN-SIO.png", "alt", "Poligrafica Industrial"], [1, "field", "mt-5"], [1, "field", "has-addons"], ["type", "Email", "placeholder", "Correo electronico", "formControlName", "Correo", 1, "input", 3, "ngModel"], [1, "field"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Contrase\xF1a", "formControlName", "Password", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-lock"], ["id", "exampleCheckboxBackgroundColorSuccess", "type", "checkbox", "name", "exampleCheckboxBackgroundColorSuccess", "checked", "checked", "formControlName", "remember", 1, "is-checkradio", "has-background-color", "is-success"], ["for", "exampleCheckboxBackgroundColorSuccess"], ["id", "remember", 1, "button", "is-fullwidth", "is-primary", 3, "ngClass"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Recu\xE9rdame");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Ingresar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.cargando));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".fondo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50em;\r\n    \r\n    background: url('FONDO-SIO.jpg') no-repeat center;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: block;\r\n    width: 500px;\r\n    background-color: white;\r\n    left: 35%;\r\n    top: 30%;\r\n    border-radius: 50px;\r\n    padding: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7b0RBQ2dEO0lBQ2hELGlEQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTQyLDE3LDI5LDAuNDAzNzk5MDE5NjA3ODQzMTUpIDAlLCByZ2JhKDI4LDQwLDQ5LDAuODM3OTcyNjg5MDc1NjMwMykgMTAwJSksXHJcbiAgICB1cmwoLi4vLi4vYXNzZXRzL2J1dHRvbi5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL0ZPTkRPLVNJTy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9naW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbGVmdDogMzUlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map