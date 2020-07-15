function plotSIRD(sirdt,savedXrange,savedYrange) {
	
	let realDataX = ['2020-03-11', '2020-03-12', '2020-03-13', '2020-03-14', '2020-03-15', '2020-03-16', '2020-03-17', '2020-03-18', '2020-03-19', '2020-03-20', '2020-03-21', '2020-03-22', '2020-03-23', '2020-03-24', '2020-03-25', '2020-03-26', '2020-03-27', '2020-03-28', '2020-03-29', '2020-03-30', '2020-03-31', '2020-04-01', '2020-04-02', '2020-04-03', '2020-04-04', '2020-04-05', '2020-04-06', '2020-04-07', '2020-04-08', '2020-04-09', '2020-04-10', '2020-04-11', '2020-04-12', '2020-04-13', '2020-04-14', '2020-04-15', '2020-04-16', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25', '2020-04-26', '2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02', '2020-05-03', '2020-05-04', '2020-05-05', '2020-05-06', '2020-05-07', '2020-05-08', '2020-05-09', '2020-05-10', '2020-05-11', '2020-05-12', '2020-05-13', '2020-05-14', '2020-05-15', '2020-05-16', '2020-05-17', '2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22', '2020-05-23', '2020-05-24', '2020-05-25', '2020-05-26', '2020-05-27', '2020-05-28', '2020-05-29', '2020-05-30', '2020-05-31', '2020-06-01', '2020-06-02', '2020-06-03', '2020-06-04', '2020-06-05', '2020-06-06', '2020-06-07', '2020-06-08', '2020-06-09', '2020-06-10', '2020-06-11', '2020-06-12', '2020-06-13', '2020-06-14', '2020-06-15', '2020-06-16', '2020-06-17', '2020-06-18', '2020-06-19', '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13'];
	let realCumDeaths = [1, 1, 1, 4, 9, 18, 29, 54, 80, 130, 180, 233, 328, 435, 577, 808, 1066, 1390, 1744, 2157, 2626, 3174, 3838, 4504, 5200, 5955, 6753, 7566, 8333, 9084, 9802, 10515, 11263, 12018, 12672, 13232, 13781, 14257, 14763, 15252, 15711, 16128, 16521, 16932, 17305, 17623, 17923, 18241, 18499, 18774, 19028, 19275, 19498, 19705, 19899, 20066, 20244, 20403, 20556, 20665, 20780, 20897, 20999, 21089, 21176, 21274, 21375, 21462, 21528, 21591, 21678, 21730, 21806, 21869, 21922, 21976, 22018, 22070, 22112, 22163, 22221, 22264, 22303, 22347, 22393, 22430, 22460, 22498, 22527, 22574, 22610, 22648, 22674, 22700, 22715, 22739, 22759, 22782, 22803, 22821, 22838, 22857, 22885, 22910, 22939, 22965, 22985, 23007, 23032, 23051, 23078, 23102, 23115, 23145, 23168, 23181, 23197, 23219, 23232, 23255, 23264, 23271, 23279, 23283, 23283];
	let realDailyDeaths = [1, 0, 0, 3, 5, 9, 11, 25, 26, 50, 50, 53, 95, 107, 142, 231, 258, 324, 354, 413, 469, 548, 664, 666, 696, 755, 798, 813, 767, 751, 718, 713, 748, 755, 654, 560, 549, 476, 506, 489, 459, 417, 393, 411, 373, 318, 300, 318, 258, 275, 254, 247, 223, 207, 194, 167, 178, 159, 153, 109, 115, 117, 102, 90, 87, 98, 101, 87, 66, 63, 87, 52, 76, 63, 53, 54, 42, 52, 42, 51, 58, 43, 39, 44, 46, 37, 30, 38, 29, 47, 36, 38, 26, 26, 15, 24, 20, 23, 21, 18, 17, 19, 28, 25, 29, 26, 20, 22, 25, 19, 27, 24, 13, 30, 23, 13, 16, 22, 13, 23, 9, 7, 8, 4, 0];
		
	var trace1 = {
	  x: sirdt[4],
	  y: sirdt[0],
	  type: 'lines',
	  name: 'Susceptible'
	};

	var trace2 = {
	  x: sirdt[4],
	  y: sirdt[1],
	  type: 'scatter',
	  name: 'Infectious'
	};

	var trace3 = {
	  x: sirdt[4],
	  y: sirdt[2],
	  type: 'scatter',
	  name: 'Recovered'
	};

	var trace4 = {
	  x: sirdt[4],
	  y: sirdt[3],
	  type: 'scatter',
	  name: 'Dead'
	};

	var trace5 = {
	  x: [sirdt[5],sirdt[5]],
	  y: [0,sirdt[0][0]],
	  type: 'scatter',
	  name: 'Lockdown Begin',
	  mode: 'lines',
	  line: {
        color: 'black',
		dash: 'dash'
	  }
	};

	var trace6 = {
	  x: [sirdt[6],sirdt[6]],
	  y: [0,sirdt[0][0]],
	  type: 'scatter',
	  name: 'Lockdown End',
	  mode: 'lines',
	  line: {
        color: 'black',
		dash: 'dash'
	  }
	};
	
	
	let dailyDpop = everyNthElement(sirdt[3],inter);
	let dailyXAxis = everyNthElement(sirdt[4],inter);
	let dd = diff(dailyDpop);
	console.log(dailyXAxis)
	var trace7 = {
	  x: dailyXAxis,
	  y: dd,
	  xaxis: 'x2',
	  yaxis: 'y2',
	  type: 'scatter',
	  name: 'Daily Deaths',
	  mode: 'lines',
	  line: {
        color: 'red'
	  }
	};
	
	var trace8 = {
	  x: realDataX,
	  y: realDailyDeaths,
	  xaxis: 'x2',
	  yaxis: 'y2',
	  type: 'scatter',
	  name: 'Real Daily Deaths',
	  mode: 'lines',
	  line: {
        color: 'green'
	  }
	};
	
	var trace9 = {
	  x: realDataX,
	  y: realCumDeaths,
	  xaxis: 'x1',
	  yaxis: 'y1',
	  type: 'scatter',
	  name: 'Real Cumulative Deaths',
	  mode: 'lines',
	  line: {
        color: 'green'
	  }
	};

	var data = [trace1, trace2, trace3, trace4, trace9, trace5, trace6, trace7, trace8];

	var layout = {
	  title: 'NYC COVID-19 Epidemic SIRD Model',
	  xaxis: {
		range: savedXrange 
	  },
	  xaxis2: {
		title: 'Time (days)',
		range: savedXrange 
	  },
	  yaxis: {
		title: 'People',
		range: savedYrange 
	  },
	  yaxis2: {
		title: 'Daily Deaths',
		autorange: true
	  },
	  legend: {
		x: 0.3,
		y: -1.1
	  },
	  
	  grid: {
	  rows: 2,
	  columns: 1,
	  pattern: 'independent',
	  roworder: 'top to bottom'}
	  
	};

	var config = {
		responsive: true
		};

	Plotly.newPlot('myDiv', data, layout, config);
};

function everyNthElement(x,n){
	let xnth = [];
	for (kx = 0; kx < x.length; kx = kx + n){
		xnth.push(x[kx]);
	}
	return xnth
}

function diff(x,interval){
	let dx = [];
	for (kx = 0; kx < x.length-2; kx++){
		dx[kx] = (x[kx+1] - x[kx]);
	}
	dx.unshift(x[0])
	return dx
}

function calculate_SIRD(i0, ifr, transRate, recovDay, ndays, inter, startDate, lockStartDate, ldTransRate, lockEndDate, postLDTransRate, dd) {
	
  let t = [0] // time
  let realT = [new Date(startDate)];
  let i = [i0] // infected
  let s = [1 - i0] // suseptible
  let r = [0] // dead + recovered
  let r2 = [r[0]-r[0]*ifr];  // recovered
  let d = [r[0]*ifr]; // dead
  let trans = transRate / inter;
  let ldTrans = ldTransRate / inter;
  let postldTrans = postLDTransRate / inter;
  let recov = 1 / recovDay / inter; // recovery + death rate. daily rate of moving from infected to removed
  let iters = ndays * inter; // number of iterations
  let intervalHours = 24 / inter;
  if (!Number.isInteger(intervalHours)) {alert('bad interval (must be whole number of hours)')}
  let thisDate = new Date(startDate);
  
  let nycpop = 8700000;
  let spop = [];
  let ipop = [];
  let r2pop = [];
  let dpop = [];

  let Sp
  let Ip
  let Rp
  for (let kt = 0; kt < iters; kt++) {
    
	if (realT[kt].getTime() < lockStartDate.getTime()){;
		// before lockdown
		Sp = -trans * s[kt] * i[kt];
		Ip = trans * s[kt] * i[kt] - recov * i[kt];
		Rp = recov * i[kt];
	}else if(realT[kt].getTime() >= lockStartDate.getTime() && realT[kt].getTime() < lockEndDate.getTime()){
		// during lockdown
		Sp = -ldTrans * s[kt] * i[kt];
		Ip = ldTrans * s[kt] * i[kt] - recov * i[kt];
		Rp = recov * i[kt];
	}else{
		// after lockdown
		Sp = -postldTrans * s[kt] * i[kt];
		Ip = postldTrans * s[kt] * i[kt] - recov * i[kt];
		Rp = recov * i[kt];
	}
		

    s.push(s[kt] + Sp);
    i.push(i[kt] + Ip);
    r.push(r[kt] + Rp);
    
	d.push(r[kt+1] * ifr);
    r2.push(r[kt+1] - r[kt+1] * ifr)
	
	spop.push(Math.round(s[s.length-1]*nycpop))
	ipop.push(Math.round(i[s.length-1]*nycpop))
	r2pop.push(Math.round(r2[s.length-1]*nycpop))
	dpop.push(Math.round(d[s.length-1]*nycpop))
	
    t.push(t[kt] + 1 / inter)
	thisDate = new Date(startDate);
	thisDate.setHours( thisDate.getHours() + (intervalHours * (kt+1)) )
	realT.push(thisDate)
  }
  
  for (let kdd = 0; kdd < dd*inter; kdd++) {
	  dpop.unshift(0);
	  dpop.pop();
	  d.unshift(0);
	  d.pop();
  }
  
  let output = [spop, ipop, r2pop, dpop, realT, lockStartDate, lockEndDate]
  return output
}
