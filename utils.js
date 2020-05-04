sap.ui.define([], function() {
	"use strict";

	return {
		confirmDialog: function(message, onConfirm) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(message, {
				icon: sap.m.MessageBox.Icon.QUESTION,
				title: "Confirmar",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function(oAction) {
					if (oAction === sap.m.MessageBox.Action.YES) {
						onConfirm();
					}
				}
			});
		},
		
		executedProcessDialog: function(message, onCallBack) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(message, {
				icon: sap.m.MessageBox.Icon.QUESTION,
				title: "Processamento Realizado",
				actions: sap.m.MessageBox.Action.OK,
				onClose: function(oAction) {
					if (oAction === sap.m.MessageBox.Action.OK) {
						onCallBack();
					}
				}
			});
		},

		validateCombo: function(oEvent) {
			var oValidatedComboBox = oEvent.getSource(),
				sSelectedKey = oValidatedComboBox.getSelectedKey(),
				sValue = oValidatedComboBox.getValue();

			if (!sSelectedKey && sValue) {
				oValidatedComboBox.setValueState("Error");
				oValidatedComboBox.setValueStateText("Valor inválido. Por favor, escolha um valor da lista apresentada.");
				alert("Valor inválido. Por favor, escolha um valor da lista apresentada.");
				oValidatedComboBox.focus();
				return false;
			} else {
				oValidatedComboBox.setValueState("None");
				return true;
			}

		},

		formatTimestamp: function(date) {
			//2019-07-15T14:08:32

			return (
				date.getFullYear() + "-" +
				("0" + (date.getMonth() + 1)).slice(-2) + "-" +
				("0" + date.getUTCDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + (
					"0" + date.getSeconds()).slice(-2));

		},
		
		formatTime: function(time) {
			//2019-07-15T14:08:32
			//time = time.toString();
			//	return "PT" + time.substring(0,2) + "H" + time.substring(2,4) + "M" + time.substring(4,6) + "S";
			return ("PT" + ("0" + time.getHours()).slice(-2) + "H" + ("0" + time.getMinutes()).slice(-2) + "M" + ("0" + time.getSeconds()).slice(-2) + "S");
		},

		formatHour: function(sHour) {
			if (sHour) {

				var date = new Date(sHour.ms);
				var timeinmiliseconds = date.getTime();
				// var oTimeFormat = sap.ui.core.format.DateFormat.getTimeInstance({
				// 	pattern: "HH:mm"
				// });
				var TZOffsetMs = new Date(date).getTimezoneOffset() * 60 * 1000;
				// var timeStr = oTimeFormat.format(new Date(timeinmiliseconds + TZOffsetMs));
				return new Date(timeinmiliseconds + TZOffsetMs);

			}
		},

		focusNextComponent: function(currentComponent, tableOfComponents) {
			// var nextComponent = tableOfComponents.filter((component) {
			// 	return component.id eq currentComponent.id
			// });
			return tableOfComponents.filter(function(component) {
				return component.id === currentComponent.id;
			});

		},
		
		calculaHoraParada: function(dataIni, horaIni, dataFim, horaFim) {
			
			var difDataHora = null;
			var calcHrParada = null;
			
			var dataHoraIni = new Date(
				dataIni.getFullYear(), 
            	("0" + dataIni.getMonth()).slice(-2), 
            	("0" + dataIni.getUTCDate()).slice(-2), 
            	("0" + horaIni.getHours()).slice(-2), 
            	("0" + horaIni.getMinutes()).slice(-2), 
            	("0" + horaIni.getSeconds()).slice(-2)
            );
			                          
            var dataHoraFim = new Date(
				dataFim.getFullYear(), 
            	("0" + dataFim.getMonth()).slice(-2), 
            	("0" + dataFim.getUTCDate()).slice(-2), 
            	("0" + horaFim.getHours()).slice(-2), 
            	("0" + horaFim.getMinutes()).slice(-2), 
            	("0" + horaFim.getSeconds()).slice(-2)
        	);			                          
			
			if (dataHoraFim > dataHoraIni) {
				difDataHora = Math.abs(dataHoraFim.getTime() - dataHoraIni.getTime());
			}
			
			calcHrParada = difDataHora ? (((difDataHora / 1000) /60) /60).toFixed(2) : 0;
			
			return calcHrParada;
		},
		
		calculaParadaApontamento: function(dataIniTrabCol, horaIniTrabCol, dataFimTrabCol, horaFimTrabCol) {
			
			var calculaHoraParada = null;
			
			if ((dataIniTrabCol !== "" || dataIniTrabCol !== undefined) ||
				(horaIniTrabCol !== "" || horaIniTrabCol !== undefined) ||
				(dataFimTrabCol !== "" || dataFimTrabCol !== undefined) ||
				(horaFimTrabCol !== "" || horaFimTrabCol !== undefined)) {
				calculaHoraParada = this.calculaHoraParada(dataIniTrabCol, horaIniTrabCol, dataFimTrabCol, horaFimTrabCol);
			}
			
			return calculaHoraParada ? calculaHoraParada : 0;
		}

	};

});

//function confirmDialog() {
//	alert("Ok");
// jQuery.sap.require("sap.m.MessageBox");
// sap.m.MessageBox.show("Confirma exclusão do apontamento?", {
// 	icon: sap.m.MessageBox.Icon.QUESTION,
// 	title: "Confirmar",
// 	actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
// 	onClose: function(oAction) {
// 		if (oAction === sap.m.MessageBox.Action.YES) {
// 			$.ajax({
// 				url: sap.ui.getCore().getModel("appView").getProperty("/url") + "/Apontamentos(" + sap.ui.getCore().byId(
// 					"apontamentoDetail--objectHeader").getNumber() + ")",
// 				type: "DELETE",
// 				jsonpCallback: 'getJSON',
// 				contentType: "application/json",
// 				dataType: 'json',
// 				crossDomain: 'true',
// 				success: function(data, textStatus, jqXHR) {
// 					sap.m.MessageToast.show("Excluído com sucesso");
// 					var oController = sap.ui.getCore().byId("apontamentoMaster").getController();
// 					oController.onAfterRendering();
// 					app.to("apontamentoMaster");

// 				},
// 				error: function(jqXHR, textStatus, errorThrown) {
// 					sap.m.MessageToast.show("Erro ao tentar excluir registro: " + errorThrown);
// 				}
// 			});
// 		}
// 	}
// });

//}