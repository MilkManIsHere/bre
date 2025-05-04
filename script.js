document.addEventListener("DOMContentLoaded", function() {
	const s = new URLSearchParams(location.search).get("score") || 0;
	const s2 = new URLSearchParams(location.search).get("score2") || 0;
	const s3 = new URLSearchParams(location.search).get("score3") || 0;
	const s4 = new URLSearchParams(location.search).get("score4") || 0;
	const s5 = new URLSearchParams(location.search).get("score5") || 0;
	const s6 = new URLSearchParams(location.search).get("score6") || 0;
	const s7 = new URLSearchParams(location.search).get("score7") || 0;
	const s8 = new URLSearchParams(location.search).get("score8") || 0;
	const s9 = new URLSearchParams(location.search).get("score9") || 0;
	const s10 = new URLSearchParams(location.search).get("score10") || 0;

	const totalScore = parseInt(s) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5) + parseInt(s6) + parseInt(s7) + parseInt(s8) + parseInt(s9) + parseInt(s10);

	const res = {
		0: "more smoked than a foot in bowman pc.",
		1: "not brell at all.",
		2: "an om foot.",
		3: "not footing.",
		4: "loosing your 848.",
		5: "not brelling.",
		6: "an average brell.",
		7: "the normal neighborhood brellfoot.",
		8: "brelling.",
		9: "a Umbrella848 stalker.",
		10: "truely Umbrella848."
	};

	document.getElementById("result").innerHTML = res[totalScore];
});