sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel"
], function(Controller, Filter, utils, JSONModel) {
	"use strict";

	return Controller.extend("sap.pm.entraprimariav1.controller.TableOperacoes", {

		onInit: function() {
			
			// this._mode = "";
			// this._activeScreen = "view";
			
		},
		
		onFiltrarBaixaPendente: function(oEvent) {
			
			// create JSON model instance
			var oModel = new JSONModel();

			// JSON sample data
			var oData = {
				Baixa: [
					{
						dataOrdem:"12/06/2018", 
						frotaCodigo:"5656", 
						orderid:"202113205", 
						ordemDescricao:"CASE A-8800 Nº 236",
						operacao:"0010",
						textoOperacao:"TROCAR ÓLEO CAIXA 4 FUROS",
						item:"0010",
						materialCodigo:"418671",
						descricaoMaterial:"OLEO HID TEXACO RANDO-100 (HD 100)",
						quantidade:"1.6",
						unidadeMedida:"LT",
						tipo:"L",
						depositos:[
							{ codigoDeposito:"SMD", codigoMaterial:"418671", descricaoDeposito:"Depósito SMD" },
							{ codigoDeposito:"SMX", codigoMaterial:"418672", descricaoDeposito:"Depósito SMX" },
							{ codigoDeposito:"SMC", codigoMaterial:"418673", descricaoDeposito:"Depósito SMC" },
							{ codigoDeposito:"SMA", codigoMaterial:"418674", descricaoDeposito:"Depósito SMA" }
						],
						dataIni:"02/04/2020",
						horaIni:"08:53:01",
						dataFim:"02/05/2020",
						horaFim:"15:23:33",
						duracaoParada:"48.02",
						unidadeParada:"H",
						controleCodigo:"123645",
						Lgort:"SMD",
						Labst:"4.000"
					},
					{
						dataOrdem:"12/06/2018", 
						frotaCodigo:"5657", 
						orderid:"202113206", 
						ordemDescricao:"CASE A-8800 Nº 236",
						operacao:"0010",
						textoOperacao:"AMOSTRAR ÓLEO SISTEMA HIDRÁULICO",
						item:"0010",
						materialCodigo:"418672",
						descricaoMaterial:"OLEO HID TEXACO RANDO-100 (HD 100)",
						quantidade:"1.6",
						unidadeMedida:"LT",
						tipo:"L",
						depositos:[
							{ codigoDeposito:"SMD", codigoMaterial:"418671", descricaoDeposito:"Depósito SMD" },
							{ codigoDeposito:"SMX", codigoMaterial:"418672", descricaoDeposito:"Depósito SMX" },
							{ codigoDeposito:"SMC", codigoMaterial:"418673", descricaoDeposito:"Depósito SMC" },
							{ codigoDeposito:"SMA", codigoMaterial:"418674", descricaoDeposito:"Depósito SMA" }
						],
						dataIni:"02/04/2020",
						horaIni:"08:53:01",
						dataFim:"02/05/2020",
						horaFim:"15:23:33",
						duracaoParada:"48.02",
						unidadeParada:"H",
						controleCodigo:"123649",
						Lgort:"SMD",
						Labst:"6.000"
					},
					{
						dataOrdem:"12/06/2018", 
						frotaCodigo:"5658", 
						orderid:"202113207", 
						ordemDescricao:"CASE A-8800 Nº 236",
						operacao:"0010",
						textoOperacao:"TROCAR FILTRO SISTEMA HIDRÁULICO",
						item:"0010",
						materialCodigo:"418672",
						descricaoMaterial:"OLEO HID TEXACO RANDO-100 (HD 100)",
						quantidade:"1.6",
						unidadeMedida:"LT",
						tipo:"L",
						depositos:[
							{ codigoDeposito:"SMD", codigoMaterial:"418671", descricaoDeposito:"Depósito SMD" },
							{ codigoDeposito:"SMX", codigoMaterial:"418672", descricaoDeposito:"Depósito SMX" },
							{ codigoDeposito:"SMC", codigoMaterial:"418673", descricaoDeposito:"Depósito SMC" },
							{ codigoDeposito:"SMA", codigoMaterial:"418674", descricaoDeposito:"Depósito SMA" }
						],
						dataIni:"02/04/2020",
						horaIni:"08:53:01",
						dataFim:"02/05/2020",
						horaFim:"15:23:33",
						duracaoParada:"48.02",
						unidadeParada:"H",
						controleCodigo:"123647",
						Lgort:"SMD",
						Labst:"5.000"
					},
					{
						dataOrdem:"12/06/2018", 
						frotaCodigo:"5659", 
						orderid:"202113208", 
						ordemDescricao:"CASE A-8800 Nº 236",
						operacao:"0010",
						textoOperacao:"TROCAR FILTRO RESPIRO CUBOS D/E",
						item:"0010",
						materialCodigo:"418672",
						descricaoMaterial:"OLEO HID TEXACO RANDO-100 (HD 100)",
						quantidade:"1.6",
						unidadeMedida:"LT",
						tipo:"L",
						depositos:[
							{ codigoDeposito:"SMD", codigoMaterial:"418671", descricaoDeposito:"Depósito SMD" },
							{ codigoDeposito:"SMX", codigoMaterial:"418672", descricaoDeposito:"Depósito SMX" },
							{ codigoDeposito:"SMC", codigoMaterial:"418673", descricaoDeposito:"Depósito SMC" },
							{ codigoDeposito:"SMA", codigoMaterial:"418674", descricaoDeposito:"Depósito SMA" }
						],
						dataIni:"02/04/2020",
						horaIni:"08:53:01",
						dataFim:"02/05/2020",
						horaFim:"15:23:33",
						duracaoParada:"48.02",
						unidadeParada:"H",
						controleCodigo:"123642",
						Lgort:"SMD",
						Labst:"7.000"
					}
				]};

			// set the data for the model
			oModel.setData(oData);
			var oView = this.getView();
			// set the model to the core
			oView.setModel(oModel);
			
		}
		
		// onSaveOperacao: function() {
			
		// 	var novaOperacao = this.getView().getModel().getProperty("/");
			
		// 	if (
		// 		!novaOperacao.centroTrabalhoCodigo || 
		// 		!novaOperacao.chaveModelo || 
		// 		!novaOperacao.textoOperacao
		// 	) {
		// 		alert("Campos: Centro de Trabalho, Chave Modelo ou Texto da Operação devem ser preenchidos");
		// 		return;
		// 	}
			
		// 	if (novaOperacao.validChaveModelo !== "None" ||
		// 		novaOperacao.validCentroTrabalho !== "None" ||
		// 		novaOperacao.validParteObjeto !== "None" ||
		// 		novaOperacao.validDefeito !== "None"
		// 	) {
		// 		alert("Há informações inválidas na operação. Corrija-as antes de salvar.");
		// 		return;
		// 	}

		// 	if (this._mode === "edit") {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/operacoes/" + this._sPath, novaOperacao);
		// 	} else {
		// 		var operacoes = this.getOwnerComponent().getModel("Ordem").getProperty("/operacoes");
		// 		operacoes.push(novaOperacao);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/operacoes", operacoes);
		// 	}
			
		// 	this._resetObjectModel();
		// 	this.onCloseCriarOperacoes();
		// 	console.log(this);

		// },
		
		// onEditOperacao: function(oEvent) {
		// 	var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
		// 	var oContext = oItem.getBindingContext("Ordem");
		// 	var sPath = oContext ? oContext.getPath() : undefined;

		// 	var operacao = this.getOwnerComponent().getModel("Ordem").getProperty(sPath);
		// 	this.getView().getModel().setProperty("/", operacao);
		// 	this._mode = "edit";
		// 	this._sPath = sPath;
		// 	this._showOperacaoFragment();
		// },
		
		// onDeleteOperacao: function(oEvent) {
			
		// 	var that = this;
			
		// 	var oList = oEvent.getSource(),
		// 		oItem = oEvent.getParameter("listItem"),
		// 		sPath = oItem.getBindingContext("Ordem").getPath().substring(11);
				
		//     var operacaoEmDelecao = oItem.getBindingContext("Ordem").oModel.oData.operacoes[sPath];
		    
		//     if (operacaoEmDelecao !== undefined) {
		    	
		//     	var componentesDaOrdem = that.getOwnerComponent().getModel("Ordem").getProperty("/materiais");
		    	
		//     	var componentesDaOperacao = componentesDaOrdem.filter(function(componente) {
		// 			return (
		// 					componente.operacao === operacaoEmDelecao.operacao 
		// 			);
		// 		});
				
		// 		if	(componentesDaOperacao.length > 0) {
		// 			alert("Existem componentes na operação que está sendo eliminada. " +
		// 			      "Elimine primeiro os componentes da operação," + 
		// 			      " para que depois a operação possa ser eliminada");
		// 			return;
		// 		}
		    	
		//     }
			
		// 	var deleteOperacao = function() {
				
		// 		oEvent.getSource();
		// 		var operacoes = that.getOwnerComponent().getModel("Ordem").getProperty("/operacoes");
		// 		operacoes.splice(sPath, 1);
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/operacoes", operacoes);
				
		// 		that._resetObjectModel();
				
		// 	};

		// 	utils.confirmDialog("Confirma exclusão da operação?", deleteOperacao);

		// },
		
		// getCodegruppeGroup: function(oContext) {
		// 	return oContext.getProperty('Codegruppe') + " - " + oContext.getProperty('CodegruppeKurztext');
		// },
		
		// handleCentroTrabalhoChange: function(oEvent) {
		// 	if (utils.validateCombo(oEvent)) {
		// 		this.getView().getModel().setProperty("/validCentroTrabalho", "None");
		// 		var oSelectedItem = sap.ui.core.Fragment.byId("Operacoes", "centroTrabalho").getSelectedItem();
		// 		this.getView().getModel().setProperty("/chaveControle", oSelectedItem.getAdditionalText());
		// 		this.getView().getModel().setProperty("/centroTrabalhoDescricao", oSelectedItem.getText());
		// 	} else {
		// 		this.getView().getModel().setProperty("/validCentroTrabalho", "Error");
		// 	}
		// },
		
		// handleCondInstalChange: function(oEvent) {
		// 	var oValidatedComboBox = oEvent.getSource(),
		// 		sValue = oValidatedComboBox.getValue();
		// 	utils.validateCombo(oEvent);

		// 	this.getView().getModel().setProperty("/condInstalDescricao", sValue);
		// },
		
		// handleParteObjetoChange: function(oEvent) {
		// 	var oValidatedComboBox = oEvent.getSource(),
		// 		sValue = oValidatedComboBox.getValue();

		// 	this.getView().getModel().setProperty("/parteObjetoDescricao", sValue);
		// },
		
		// handleDefeitoChange: function(oEvent) {
		// 	var oValidatedComboBox = oEvent.getSource(),
		// 		sValue = oValidatedComboBox.getValue();

		// 	this.getView().getModel().setProperty("/defeitoDescricao", sValue);
		// },
		
		// handleValueHelpChavesModelo: function(oEvent) {

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogChavesModelo) {
		// 		this._valueHelpDialogChavesModelo = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.ChavesModelo",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogChavesModelo);
		// 	}

		// 	this._valueHelpDialogChavesModelo.open();
		// },
		
		// handleValueHelpSearchChavesModelo: function(oEvent) {
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	if (sValue === "") {
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_CHAVE_MODELOSet", []);
		// 		return;
		// 	}
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_CHAVE_MODELOSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Txt eq '" + sValue + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_CHAVE_MODELOSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados das chaves modelo");
		// 		}
		// 	});

		// },
		
		// handleCloseChavesModelo: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getView().getModel().setProperty("/chaveModelo", oContext.getObject().Vlsch);
		// 		this.getView().getModel().setProperty("/textoOperacao", oContext.getObject().Txt);
		// 		console.log(this.getView().getModel());
		// 	}
		// 	this.validaChaveModelo();
		// },
		
		// handleValueHelpPartesObjetos: function(oEvent) {

		// 	this.inputId = oEvent.getSource().getId();
		// 	if (!this._valueHelpDialogPartesObjetos) {
		// 		this._valueHelpDialogPartesObjetos = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.PartesObjetos",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogPartesObjetos);
		// 	}

		// 	this._valueHelpDialogPartesObjetos.open();
		// },
		
		// handleValueHelpSearchPartesObjetos: function(oEvent) {
			
		
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
			
		// 	var aFilters = [];
		// 	var oFilter1 = new Filter("Code", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter2 = new Filter("Kurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter3 = new Filter("Codegruppe", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter4 = new Filter("CodegruppeKurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var allFilters = new sap.ui.model.Filter([oFilter1, oFilter2,oFilter3, oFilter4], false);
		// 	var oBinding = oEvent.getSource().getBinding("items");
		// 	aFilters.push(allFilters);
		// 	oBinding.filter(aFilters);
		// },
		
		// handleClosePartesObjetos: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getView().getModel().setProperty("/validParteObjeto", "None");
		// 		this.getView().getModel().setProperty("/parteObjetoCodigo", oContext.getObject().Code);
		// 		this.getView().getModel().setProperty("/parteObjetoDescricao", oContext.getObject().Kurztext);
		// 		this.getView().getModel().setProperty("/parteObjetoGrupo", oContext.getObject().Codegruppe);
		// 		//	console.log("You have chosen " + aContexts.map(function(oContext) { return oContext.getObject().Txt; }).join(", "));
		// 		console.log(this.getView().getModel());
		// 	}
		// 	//this.validaParteObjeto();
		// },
		
		// handleValueHelpDefeitos: function(oEvent) {

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogDefeitos) {
		// 		this._valueHelpDialogDefeitos = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.Defeitos",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogDefeitos);
		// 	}

		// 	this._valueHelpDialogDefeitos.open();
		// },
		
		// handleValueHelpSearchDefeitos: function(oEvent) {
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	var aFilters = [];
		// 	var oFilter1 = new Filter("Code", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter2 = new Filter("Kurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter3 = new Filter("Codegruppe", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter4 = new Filter("CodegruppeKurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var allFilters = new sap.ui.model.Filter([oFilter1, oFilter2,oFilter3, oFilter4], false);
		// 	var oBinding = oEvent.getSource().getBinding("items");
		// 	aFilters.push(allFilters);
		// 	oBinding.filter(aFilters);
		// },
		
		// handleCloseDefeitos: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getView().getModel().setProperty("/validDefeito", "None");
		// 		this.getView().getModel().setProperty("/defeitoCodigo", oContext.getObject().Code);
		// 		this.getView().getModel().setProperty("/defeitoDescricao", oContext.getObject().Kurztext);
		// 		this.getView().getModel().setProperty("/defeitoGrupo", oContext.getObject().Codegruppe);
		// 		console.log(this.getView().getModel());
		// 	}
		// },
		
		// validaChaveModelo: function(oEvent) {
			
		// 	var chaveModeloCodigo = oEvent.getParameter("value").toString().toUpperCase();

		// 	if (chaveModeloCodigo === '') {
		// 		this.getView().getModel().setProperty("/validChaveModelo", "None");
		// 		this.getView().getModel().setProperty("/textoOperacao", "");
		// 		return;
		// 	}
		// 	var sPath = "/Z_LISTA_CHAVE_MODELOSet('" + chaveModeloCodigo + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validChaveModelo", "None");
		// 			that.getView().getModel().setProperty("/chaveModeloCodigo", oData.Vlsch);
		// 			that.getView().getModel().setProperty("/textoOperacao", oData.Txt);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Chave modelo não encontrada");
		// 			that.getView().getModel().setProperty("/validChaveModelo", "Error");
		// 			that.getView().getModel().setProperty("/textoOperacao", "");
		// 		}
		// 	});
		// },
		
		// validaParteObjeto: function(oEvent) {
		// 	var parteObjetoCodigo = oEvent.getParameter("value").toString().toUpperCase();

		// 	if (parteObjetoCodigo === '') {
		// 		this.getView().getModel().setProperty("/validParteObjeto", "None");
		// 		this.getView().getModel().setProperty("/parteObjetoDescricao", "");
		// 		this.getView().getModel().setProperty("/parteObjetoGrupo", "");

		// 		return;
		// 	}
		// 	var tipoNota = this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota");
		// 	var sPath = "/Z_LISTA_PARTE_OBJETOSet(Codegruppe='',Qmart='"+ tipoNota +"',Code='" + parteObjetoCodigo + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validParteObjeto", "None");
		// 			that.getView().getModel().setProperty("/parteObjetoCodigo", oData.Code);
		// 			that.getView().getModel().setProperty("/parteObjetoDescricao", oData.Kurztext);
		// 			that.getView().getModel().setProperty("/parteObjetoGrupo", oData.Codegruppe);

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Parte objeto não encontrada");
		// 			that.getView().getModel().setProperty("/validParteObjeto", "Error");
		// 			that.getView().getModel().setProperty("/parteObjetoDescricao", "");
		// 			that.getView().getModel().setProperty("/parteObjetoGrupo", "");
		// 		}
		// 	});
		// },
		
		// validaDefeito: function(oEvent) {
		// 	var defeitoCodigo = oEvent.getParameter("value").toString().toUpperCase();

		// 	if (defeitoCodigo === '') {
		// 		this.getView().getModel().setProperty("/validDefeito", "None");
		// 		this.getView().getModel().setProperty("/defeitoDescricao", "");
		// 		return;
		// 	}
		// 	var tipoNota = this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota");
		// 	var sPath = "/Z_LISTA_DEFEITOSet(Codegruppe='',Qmart='"+ tipoNota +"',Code='" + defeitoCodigo + "')";
		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validDefeito", "None");
		// 			that.getView().getModel().setProperty("/defeitoCodigo", oData.Code);
		// 			that.getView().getModel().setProperty("/defeitoDescricao", oData.Kurztext);
		// 			that.getView().getModel().setProperty("/defeitoGrupo", oData.Codegruppe);

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Defeito não encontrado");
		// 			that.getView().getModel().setProperty("/validDefeito", "Error");
		// 			that.getView().getModel().setProperty("/defeitoDescricao", "");
		// 			that.getView().getModel().setProperty("/defeitoGrupo", "");
		// 		}
		// 	});
		// },
		
		// _resetObjectModel: function() {
			
		// 	var codigoCentroTrabalho	= "";
		// 	var chaveControle			= "";
		// 	var centroTrabalhoDescricao = "";
		// 	var descricao               = "";
		// 	var idOperacao              = "";
		// 	var novoIdOperacao          = "";
		// 	var pad                     = "0000";
		// 	var controleOperacao        = "";
			
		// 	if (this._modelOrdem !== undefined) {
		// 		descricao = this._modelOrdem.oData.centroDeTrabalho.centroTrabalhoCodigo + 
		// 		            " - " + 
		// 		            this._modelOrdem.oData.centroDeTrabalho.centroTrabalhoDescricao;
				            
		// 		codigoCentroTrabalho	= this._modelOrdem.oData.centroDeTrabalho.centroTrabalhoCodigo;
		// 		chaveControle			= this._modelOrdem.oData.centroDeTrabalho.chaveControle;
		// 		centroTrabalhoDescricao = descricao;
				
		// 		novoIdOperacao = ((this._modelOrdem.oData.operacoes.length + 1) * 10).toString();
		// 		idOperacao     = (pad + novoIdOperacao).slice(-pad.length);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/controleOperacao", idOperacao);
		// 	} else {
		// 		novoIdOperacao = "10";
		// 		idOperacao     = (pad + novoIdOperacao).slice(-pad.length);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/controleOperacao", idOperacao);
		// 	}
			
		// 	// Apontamento
		// 	controleOperacao = this.getOwnerComponent().getModel("Ordem").getProperty("/controleOperacao");
			
		// 	var dataInicioParadaEquipamento = this.getOwnerComponent().getModel("Ordem").getProperty("/dataInicioParadaEquipamento");
		// 	var horaInicioParadaEquipamento = this.getOwnerComponent().getModel("Ordem").getProperty("/horaInicioParadaEquipamento");
			
		// 	var DataIniTrabCol = this.getOwnerComponent().getModel("Ordem").getProperty("/DataIniTrabCol");
		// 	var horaIniTrabCol = this.getOwnerComponent().getModel("Ordem").getProperty("/horaIniTrabCol");
			
		// 	var dataFimTrabCol = this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimTrabCol");
		// 	var horaFimTrabCol = this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimTrabCol");
			
		// 	var duracaoParada = utils.calculaParadaApontamento(
		// 		dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento,
		// 		dataFimTrabCol,
		// 		horaFimTrabCol
		// 	);
			
		// 	var unidadeParada = "H";
			
		// 	// Avaria
		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);
			
		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}
			
		// 	var oData = {
		// 		centroTrabalhoCodigo: codigoCentroTrabalho,
		// 		chaveControle: chaveControle, // Adicionado / Novo
		// 		centroTrabalhoDescricao: centroTrabalhoDescricao,
		// 		operacao: controleOperacao,
		// 		chaveModelo: "",
		// 		textoOperacao: "",
		// 		confFinal: false,
		// 		darBaixaRes: false,
		// 		DataIniTrabCol: DataIniTrabCol,
		// 		horaIniTrabCol: horaIniTrabCol,
		// 		dataFimTrabCol: dataFimTrabCol,
		// 		horaFimTrabCol: horaFimTrabCol,
		// 		controleCodigo: "",
		// 		controleNome: "",
		// 		parteObjetoCodigo: "",
		// 		parteObjetoDescricao: "",
		// 		parteObjetoGrupo: "",
		// 		defeitoCodigo: "",
		// 		defeitoDescricao: "",
		// 		defeitoGrupo: "",
		// 		causaGrupo: "",
		// 		causaCodigo: "",
		// 		causaDescricao: "",
		// 		acaoGrupo: "",
		// 		acaoCodigo: "",
		// 		acaoDescricao: "",
		// 		dataInicioParadaEquipamento: dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento: horaInicioParadaEquipamento,
		// 		duracaoParada: duracaoParada,
		// 		unidadeParada: unidadeParada,
		// 		validChaveModelo: "None",
		// 		validCentroTrabalho: "None",
		// 		validParteObjeto: "None",
		// 		validDefeito: "None"
		// 	};
		// 	this.getView().setModel(new sap.ui.model.json.JSONModel(oData));
		// 	this._activeScreen = "fragment";
		// 	this._mode = "add";
		// },
		
		// handleValueHelpCausas: function(oEvent) {

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogCausas) {
		// 		this._valueHelpDialogCausas = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.Causas",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogCausas);
		// 	}

		// 	this._valueHelpDialogCausas.open();
		// },
		
		// handleValueHelpSearchCausas: function(oEvent) {
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	var aFilters = [];
		// 	var oFilter1 = new Filter("Code", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter2 = new Filter("Kurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter3 = new Filter("Codegruppe", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter4 = new Filter("CodegruppeKurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var allFilters = new sap.ui.model.Filter([oFilter1, oFilter2, oFilter3, oFilter4], false);
		// 	var oBinding = oEvent.getSource().getBinding("items");
		// 	aFilters.push(allFilters);
		// 	oBinding.filter(aFilters);

		// },

		// handleCloseCausas: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getView().getModel().setProperty("/validCausa", "None");
		// 		this.getView().getModel().setProperty("/causaCodigo", oContext.getObject().Code);
		// 		this.getView().getModel().setProperty("/causaDescricao", oContext.getObject().Kurztext);
		// 		this.getView().getModel().setProperty("/causaGrupo", oContext.getObject().Codegruppe);
		// 		console.log(this.getView().getModel());
		// 	}
		// 	//this.validaDefeito();
		// },
		
		// validaCausa: function(oEvent) {
		// 	var causaCodigo = oEvent.getParameter("value").toString().toUpperCase();

		// 	if (causaCodigo === '') {
		// 		this.getView().getModel().setProperty("/validCausa", "None");
		// 		this.getView().getModel().setProperty("/causaDescricao", "");
		// 		this.getView().getModel().setProperty("/causaGrupo", "");

		// 		return;
		// 	}
		// 	var tipoNota = this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota");
		// 	// var sPath = "/Z_LISTA_CAUSASet(Codegruppe='',Qmart='" + tipoNota + "',Code='" + causaCodigo + "')";
		// 	var sPath = "/Z_LISTA_CAUSASet(Code='" + causaCodigo + "',Qmart='" + tipoNota + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validCausa", "None");
		// 			that.getView().getModel().setProperty("/causaCodigo", oData.Code);
		// 			that.getView().getModel().setProperty("/causaDescricao", oData.Kurztext);
		// 			that.getView().getModel().setProperty("/causaGrupo", oData.Codegruppe);

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Causa não encontrada");
		// 			that.getView().getModel().setProperty("/validCausa", "Error");
		// 			that.getView().getModel().setProperty("/causaDescricao", "");
		// 			that.getView().getModel().setProperty("/causaGrupo", "");
		// 		}
		// 	});
		// },
		
		// handleValueHelpAcoes: function(oEvent) {

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogAcoes) {
		// 		this._valueHelpDialogAcoes = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.Acoes",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogAcoes);
		// 	}

		// 	this._valueHelpDialogAcoes.open();
		// },
		
		// handleValueHelpSearchAcoes: function(oEvent) {
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	var aFilters = [];
		// 	var oFilter1 = new Filter("Code", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter2 = new Filter("Kurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter3 = new Filter("Codegruppe", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var oFilter4 = new Filter("CodegruppeKurztext", sap.ui.model.FilterOperator.Contains, sValue);
		// 	var allFilters = new sap.ui.model.Filter([oFilter1, oFilter2, oFilter3, oFilter4], false);
		// 	var oBinding = oEvent.getSource().getBinding("items");
		// 	aFilters.push(allFilters);
		// 	oBinding.filter(aFilters);

		// },

		// handleCloseAcoes: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getView().getModel().setProperty("/validAcao", "None");
		// 		this.getView().getModel().setProperty("/acaoCodigo", oContext.getObject().Code);
		// 		this.getView().getModel().setProperty("/acaoDescricao", oContext.getObject().Kurztext);
		// 		this.getView().getModel().setProperty("/acaoGrupo", oContext.getObject().Codegruppe);
		// 		console.log(this.getView().getModel());
		// 	}
		// 	//this.validaDefeito();
		// },
		
		// validaAcao: function(oEvent) {
		// 	var acaoCodigo = oEvent.getParameter("value").toString().toUpperCase();

		// 	if (acaoCodigo === '') {
		// 		this.getView().getModel().setProperty("/validAcao", "None");
		// 		this.getView().getModel().setProperty("/acaoDescricao", "");
		// 		this.getView().getModel().setProperty("/acaoGrupo", "");

		// 		return;
		// 	}
		// 	var tipoNota = this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota");
		// 	// var sPath = "/Z_LISTA_ACAOSet(Codegruppe='',Qmart='" + tipoNota + "',Code='" + acaoCodigo + "')";
		// 	var sPath = "/Z_LISTA_ACAOSet(Code='" + acaoCodigo + "',Qmart='" + tipoNota + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validAcao", "None");
		// 			that.getView().getModel().setProperty("/acaoCodigo", oData.Code);
		// 			that.getView().getModel().setProperty("/acaoDescricao", oData.Kurztext);
		// 			that.getView().getModel().setProperty("/acaoGrupo", oData.Codegruppe);

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Causa não encontrada");
		// 			that.getView().getModel().setProperty("/validAcao", "Error");
		// 			that.getView().getModel().setProperty("/acaoDescricao", "");
		// 			that.getView().getModel().setProperty("/acaoGrupo", "");
		// 		}
		// 	});
		// },
		
		// changeControleCodigo: function(oEvent) {
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var controleCodigo = oEvent.getParameter("value").toString().toUpperCase();
			
		// 	// Se o código não for informado, sai da tela e não apresenta o erro
		// 	if (!controleCodigo) {
		// 		return;
		// 	}

		// 	var sPath = "/Z_LISTA_FUNCIONARIOSSet('" + controleCodigo + "')";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getView().getModel().setProperty("/validControle", "None");
		// 			that.getView().getModel().setProperty("/controleNome", oData.Cname);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Funcionário não encontrado");
		// 			that.getView().getModel().setProperty("/validControle", "None");
		// 			that.getView().getModel().setProperty("/controleNome", "");
		// 		}
		// 	});

		// },
		
		// onCriarOperacao: function() {
			
		// 	this._modelOrdem = this.getOwnerComponent().getModel("Ordem");
		// 	this._resetObjectModel();
		// 	this._showOperacaoFragment();
			
		// },
		
		// onCloseCriarOperacoes: function() {
		// 	this._activeScreen = "view";
		// 	this._OperacoesFragment.close();
		// },
		
		// _showOperacaoFragment: function() {
		// 	if (!this._OperacoesFragment) {
		// 		this._OperacoesFragment = sap.ui.xmlfragment("Apontamentos",
		// 			"sap.pm.entrarordem.view.fragments.Operacoes",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._OperacoesFragment);
		// 	}
		// 	this._OperacoesFragment.open();
		// },
		
		// // INI - Tratativas para DATA / HORA FIM TRABALHO DO COLABORADOR
		
		// changeDataFimTrabCol: function() {
			
		// 	var dataFimTrabCol = this.getView().getModel().getProperty("/dataFimTrabCol");
			
		// 	if (dataFimTrabCol !== "" || dataFimTrabCol !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimDesejado", dataFimTrabCol);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimPlanejado", dataFimTrabCol);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimAvaria", dataFimTrabCol);
		// 	}
			
		// 	// Apontamentos
		// 	var horaFimTrabCol = this.getView().getModel().getProperty("/horaFimTrabCol");
		// 	var dataInicioParadaEquipamento = this.getView().getModel().getProperty("/dataInicioParadaEquipamento");
		// 	var horaInicioParadaEquipamento = this.getView().getModel().getProperty("/horaInicioParadaEquipamento");
			
		// 	var duracaoParada = utils.calculaParadaApontamento(
		// 		dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento,
		// 		dataFimTrabCol,
		// 		horaFimTrabCol
		// 	);
			
		// 	if (duracaoParada !== "" || duracaoParada !== undefined) {
		// 		this.getView().getModel().setProperty("/duracaoParada", duracaoParada);					
		// 	} else {
		// 		this.getView().getModel().setProperty("/duracaoParada", "0");
		// 	}
			
		// 	var unidadeParada = "H";
		// 	this.getView().getModel().setProperty("/unidadeParada", unidadeParada);
			
		// 	// Avaria
		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);
			
		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}
			
		// },
		
		// changeHoraFimTrabCol: function() {
			
		// 	var horaFimTrabCol = this.getView().getModel().getProperty("/horaFimTrabCol");
			
		// 	if (horaFimTrabCol !== "" || horaFimTrabCol !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimDesejado", horaFimTrabCol);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimPlanejado", horaFimTrabCol);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimAvaria", horaFimTrabCol);
		// 	}
			
		// 	// Apontamentos
		// 	var dataFimTrabCol = this.getView().getModel().getProperty("/dataFimTrabCol");
		// 	var dataInicioParadaEquipamento = this.getView().getModel().getProperty("/dataInicioParadaEquipamento");
		// 	var horaInicioParadaEquipamento = this.getView().getModel().getProperty("/horaInicioParadaEquipamento");
			
		// 	var duracaoParada = utils.calculaParadaApontamento(
		// 		dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento,
		// 		dataFimTrabCol,
		// 		horaFimTrabCol
		// 	);
			
		// 	if (duracaoParada !== "" || duracaoParada !== undefined) {
		// 		this.getView().getModel().setProperty("/duracaoParada", duracaoParada);					
		// 	} else {
		// 		this.getView().getModel().setProperty("/duracaoParada", "0");
		// 	}
			
		// 	var unidadeParada = "H";
		// 	this.getView().getModel().setProperty("/unidadeParada", unidadeParada);
			
		// 	// Avaria
		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);
			
		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}
			
		// },
		
		// // FIM - Tratativas para DATA / HORA FIM TRABALHO DO COLABORADOR
		
		// // INI - Tratativas para DATA / HORA INICIO AVARIA EQUIPAMENTO NA NOTA
		
		// changeDataInicioParadaEquipamento: function() {
			
		// 	var dataInicioParadaEquipamento = this.getView().getModel().getProperty("/dataInicioParadaEquipamento");
			
		// 	if (dataInicioParadaEquipamento !== "" || dataInicioParadaEquipamento !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataPlanejado", dataInicioParadaEquipamento);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataAvaria", dataInicioParadaEquipamento);
		// 	}
			
		// 	// Apontamentos
		// 	var dataFimTrabCol = this.getView().getModel().getProperty("/dataFimTrabCol");
		// 	var horaFimTrabCol = this.getView().getModel().getProperty("/horaFimTrabCol");
		// 	var horaInicioParadaEquipamento = this.getView().getModel().getProperty("/horaInicioParadaEquipamento");
			
		// 	var duracaoParada = utils.calculaParadaApontamento(
		// 		dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento,
		// 		dataFimTrabCol,
		// 		horaFimTrabCol
		// 	);
			
		// 	if (duracaoParada !== "" || duracaoParada !== undefined) {
		// 		this.getView().getModel().setProperty("/duracaoParada", duracaoParada);					
		// 	} else {
		// 		this.getView().getModel().setProperty("/duracaoParada", "0");
		// 	}
			
		// 	var unidadeParada = "H";
		// 	this.getView().getModel().setProperty("/unidadeParada", unidadeParada);
			
		// 	// Avaria
		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);
			
		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}
			
		// },
		
		// changeHoraInicioParadaEquipamento: function() {
			
		// 	var horaInicioParadaEquipamento = this.getView().getModel().getProperty("/horaInicioParadaEquipamento");
			
		// 	if (horaInicioParadaEquipamento !== "" || horaInicioParadaEquipamento !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaPlanejado", horaInicioParadaEquipamento);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaAvaria", horaInicioParadaEquipamento);
		// 	}
			
		// 	// Apontamentos
		// 	var dataFimTrabCol = this.getView().getModel().getProperty("/dataFimTrabCol");
		// 	var horaFimTrabCol = this.getView().getModel().getProperty("/horaFimTrabCol");
		// 	var dataInicioParadaEquipamento = this.getView().getModel().getProperty("/dataInicioParadaEquipamento");
			
		// 	var duracaoParada = utils.calculaParadaApontamento(
		// 		dataInicioParadaEquipamento,
		// 		horaInicioParadaEquipamento,
		// 		dataFimTrabCol,
		// 		horaFimTrabCol
		// 	);
			
		// 	if (duracaoParada !== "" || duracaoParada !== undefined) {
		// 		this.getView().getModel().setProperty("/duracaoParada", duracaoParada);					
		// 	} else {
		// 		this.getView().getModel().setProperty("/duracaoParada", "0");
		// 	}
			
		// 	var unidadeParada = "H";
		// 	this.getView().getModel().setProperty("/unidadeParada", unidadeParada);
			
		// 	// Avaria
		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);
			
		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}
			
		// }
		
		// // FIM - Tratativas para DATA / HORA INICIO AVARIA EQUIPAMENTO NA NOTA
		
	});

});