!function (window, document, undefined) {

	class SadariView {
		/*
		 * DOM요소 초기화
		 */
		constructor () {
			this.appIntroForm = document.querySelector("#app-intro");
			this.appResult = document.querySelector("#app-result");
			this.appStartData = document.querySelector("#sadari-start-data");
			this.appEndData = document.querySelector("#sadari-end-data");
			this.lineCanvas = document.querySelector("#sadari-line");
			this.startItems = [];// = appStartData.querySelectorAll(".result-data");
			this.endItems = [];// = appEndData.querySelectorAll(".result-data");
		}
		/*
		 * 사다리 초기섫정 폼 가져오기
		 */
		getForm () {
			return this.appIntroForm;
		}
		/*
		 * 사다리 캔버스 객체 반환
		 */
		getCanvas () {
			return this.lineCanvas;
		}
		/*
		 * 사다리 폼 요소 반환
		 */
		getInput (id) {
			return this.getForm().querySelector(id);
		}
		/*
		 * 결과화면 반환
		 */
		getResult () {
			return this.appResult;
		}
		/*
		 * 사다리 시작데이터 그리기
		 */
		createStartData (data) {
			this.startItems = [];
			var html = "";
			data.forEach(function (value, index) {
				html += "<div class=\"result-data\"><em class=\"result-data-value\">"+value+"</em></div>";
			});
			this.appStartData.innerHTML = html;
			this.startItems = this.appStartData.querySelectorAll(".result-data");
		}
		/*
		 * 사다리 끝데이터 그리기
		 */
		createEndData (data) {
			this.endItems = [];
			var html = "";
			data.forEach(function (value, index) {
				html += "<div class=\"result-data"+(value === null ? "" : " __active")+"\"><em class=\"result-data-value\">"+(value || "X")+"</em></div>";
			});
			this.appEndData.innerHTML = html;
			this.endItems = this.appEndData.querySelectorAll(".result-data");
		}
		/*
		 * 사다리 시작 아이템 DOM요소
		 */
		getStartData () {
			return this.startItems;
		}
		/*
		 * 시다리 끝 아이템 DOM요소
		 */
		getEndData () {
			return this.endItems;
		}
		/*
		 * 초기화면으로 열기
		 */
		introPageOpen () {
			this.appResult.classList.remove("__active");
			this.appIntroForm.classList.add("__active");
		}
		/*
		 * 결과화면으로 열기
		 */
		resultPageOpen () {
			this.appIntroForm.classList.remove("__active");
			this.appResult.classList.add("__active");
		}
		/*
		 * 가리개 보이기
		 */
		showResultHider () {
			this.lineCanvas.parentNode.classList.add("__active");
		}
		/*
		 * 가리개 가리기
		 */
		hideResultHider () {
			this.lineCanvas.parentNode.classList.remove("__active");
		}
	}

	window.SadariView = SadariView;

}(window, document);
