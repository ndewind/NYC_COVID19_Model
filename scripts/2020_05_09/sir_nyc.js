function plotSIRD(sirdt,savedXrange,savedYrange) {
	
	let realDataX = ['2020-03-11', '2020-03-14', '2020-03-15', '2020-03-16', '2020-03-17', '2020-03-18', '2020-03-19', '2020-03-20', '2020-03-21', '2020-03-22', '2020-03-23', '2020-03-24', '2020-03-25', '2020-03-26', '2020-03-27', '2020-03-28', '2020-03-29', '2020-03-30', '2020-03-31', '2020-04-01', '2020-04-02', '2020-04-03', '2020-04-04', '2020-04-05', '2020-04-06', '2020-04-07', '2020-04-08', '2020-04-09', '2020-04-10', '2020-04-11', '2020-04-12', '2020-04-13', '2020-04-14', '2020-04-15', '2020-04-16', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25', '2020-04-26', '2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02', '2020-05-03', '2020-05-04', '2020-05-05', '2020-05-06', '2020-05-07', '2020-05-08', '2020-05-09', '2020-05-10', '2020-05-11', '2020-05-12', '2020-05-13', '2020-05-14', '2020-05-15', '2020-05-16', '2020-05-17', '2020-05-18', '2020-05-19'];
	let realCumDeaths = [1, 4, 9, 19, 30, 54, 80, 129, 179, 232, 327, 434, 573, 800, 1056, 1375, 1730, 2139, 2600, 3133, 3791, 4447, 5129, 5871, 6662, 7475, 8222, 8952, 9653, 10349, 11079, 11817, 12464, 13006, 13546, 14001, 14479, 14945, 15389, 15789, 16166, 16555, 16912, 17204, 17487, 17792, 18037, 18302, 18548, 18786, 19002, 19199, 19381, 19537, 19705, 19854, 19997, 20105, 20207, 20319, 20413, 20490, 20569, 20653, 20735, 20806, 20838, 20840];
	let realDailyDeaths = [1, 3, 5, 10, 11, 24, 26, 49, 50, 53, 95, 107, 139, 227, 256, 319, 355, 409, 461, 533, 658, 656, 682, 742, 791, 813, 747, 730, 701, 696, 730, 738, 647, 542, 540, 455, 478, 466, 444, 400, 377, 389, 357, 292, 283, 305, 245, 265, 246, 238, 216, 197, 182, 156, 168, 149, 143, 108, 102, 112, 94, 77, 79, 84, 82, 71, 32, 2];
		
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
