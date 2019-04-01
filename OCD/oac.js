$(document).ready(function(){
	console.log("hello!");
});

/*SHOWING OBSESSIONS*/
/*germs&contamination*/
	$(document).ready(function(){
		$(".gac").click(function(){
			$("li[data-value=gac]").toggleClass("show1");
			$("li[data-value=gacpab]").toggleClass("show1");
		});
	}); 

	$(document).ready(function(){
		$(".gac").hover(function(){
			$("li[data-value=gac]").toggleClass("grey");
			$("li[data-value=gacpab]").toggleClass("grey");
		});
	});
/*illness&death*/
	$(document).ready(function(){
		$(".iad").click(function(){
			$("li[data-value=iad]").toggleClass("show2");
			$("li[data-value=iadpab]").toggleClass("show2");
			$("li[data-value=iadrel]").toggleClass("show2");
		});
	}); 

	$(document).ready(function(){
		$(".iad").hover(function(){
			$("li[data-value=iad]").toggleClass("grey");
			$("li[data-value=iadpab]").toggleClass("grey");
			$("li[data-value=iadrel]").toggleClass("grey");
		});
	});
/*relationships*/
	$(document).ready(function(){
		$(".rel").click(function(){
			$("li[data-value=rel]").toggleClass("show3");
			$("li[data-value=reldav]").toggleClass("show3");
		});
	}); 

	$(document).ready(function(){
		$(".rel").hover(function(){
			$("li[data-value=rel]").toggleClass("grey");
			$("li[data-value=reldav]").toggleClass("grey");
		});
	}); 
/*personality&body*/
	$(document).ready(function(){
		$(".pab").click(function(){
			$("li[data-value=pab]").toggleClass("show4");
			$("li[data-value=pabgac]").toggleClass("show4");
			$("li[data-value=iadpab]").toggleClass("show4");
		});
	}); 

	$(document).ready(function(){
		$(".pab").hover(function(){
			$("li[data-value=pab]").toggleClass("grey");
			$("li[data-value=gacpab]").toggleClass("grey");
			$("li[data-value=iadpab]").toggleClass("grey");
		});
	});
/*destruction&violence*/
	$(document).ready(function(){
		$(".dav").click(function(){
			$("li[data-value=dav]").toggleClass("show5");
			$("li[data-value=reldav]").toggleClass("show5");
		});
	}); 

	$(document).ready(function(){
		$(".dav").hover(function(){
			$("li[data-value=dav]").toggleClass("grey");
			$("li[data-value=reldav]").toggleClass("grey");
		});
	}); 
/*other*/
	$(document).ready(function(){
		$(".oth").click(function(){
			$("li[data-value=oth]").toggleClass("show6");
		});
	}); 

	$(document).ready(function(){
		$(".oth").hover(function(){
			$("li[data-value=oth]").toggleClass("grey");
		});
	});

/*SHOWING COMPULSIONS*/
/*germs&contamination*/
	/*feces*/
		$(document).ready(function(){
			$("li[id=feces]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink1", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink1", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=feces]").hover(function(){
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		});
	/*urine*/
		$(document).ready(function(){
			$("li[id=urine]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink2", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink2", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=urine]").hover(function(){
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		});
	/*saliva*/
		$(document).ready(function(){
			$("li[id=saliva]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink3", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink3", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=saliva]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		});
	/*pus*/
		$(document).ready(function(){
			$("li[id=pus]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink4", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink4", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=pus]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		});

	/*sweat*/
		$(document).ready(function(){
			$("li[id=sweat]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink5", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink5", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=sweat]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		});
	/*blood*/
		$(document).ready(function(){
			$("li[id=blood]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink6", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink6", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=blood]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*smellofmeat*/
		$(document).ready(function(){
			$("li[id=smellofmeat]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink7", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink7", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink7", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink7", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink7", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink7", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=smellofmeat]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*tasteofmeat*/
		$(document).ready(function(){
			$("li[id=tasteofmeat]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink8", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink8", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink8", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink8", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink8", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink8", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=tasteofmeat]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*NEED EDITING*/
	/*rottingwood*/
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=rottingwood]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink9", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink9", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=rottingwood]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*the smell rot*/
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=smellofrot]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink10", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink10", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink10", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink10", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink10", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink10", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=smellofrot]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*rotting food*/
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=rottingfood]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink11", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink11", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink11", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink11", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink11", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink11", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=rottingfood]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*foods with dairy*/
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=foodswithdairy]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink12", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink12", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink12", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink12", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink12", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink12", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=foodswithdairy]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		});  
	/*getting cancer*/
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=gettingcancer]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink13", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink13", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$(this).toggleClass("show");
			$("li[id=gettingcancer]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*giving a loved one cancer*/
		$(document).ready(function(){
			$("li[id=givingcancer]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink14", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink14", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=givingcancer]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*getting tuberculosis*/
		$(document).ready(function(){
			$("li[id=gettinglosis]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink15", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink15", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink15", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink15", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink15", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink15", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=gettinglosis]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*giving a loved one tuberculosis*/
		$(document).ready(function(){
			$("li[id=givinglosis]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink16", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink16", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink16", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink16", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink16", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink16", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=givinglosis]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*contaminating a loved one*/
		$(document).ready(function(){
			$("li[id=contlovedone]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink17", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink17", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=contlovedone]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*people i'm  not comfortable with touching me*/
		$(document).ready(function(){
			$("li[id=touchingme]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink18", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink18", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=touchingme]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*the death of a loved one*/
		$(document).ready(function(){
			$("li[id=deathoflovedone]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink19", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink19", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink19", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=deathoflovedone]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		});
	/*dying*/
		$(document).ready(function(){
			$("li[id=dying]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=j]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=k]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=l]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=m]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=n]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=o]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink20", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink20", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink20", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=dying]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=i]").toggleClass("grey", "addOrRemove");
				$("li[data-value=j]").toggleClass("grey", "addOrRemove");
				$("li[data-value=k]").toggleClass("grey", "addOrRemove");
				$("li[data-value=l]").toggleClass("grey", "addOrRemove");
				$("li[data-value=m]").toggleClass("grey", "addOrRemove");
				$("li[data-value=n]").toggleClass("grey", "addOrRemove");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*that nobody cares about me*/
		$(document).ready(function(){
			$("li[id=nobodycares]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink21", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink21", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink21", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=nobodycares]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*people plotting against me*/
		$(document).ready(function(){
			$("li[id=plottingagainstme]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink22", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink22", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink22", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=plottingagainstme]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*my friends leaving me*/
		$(document).ready(function(){
			$("li[id=friendsleaveme]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink23", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink23", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink23", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=friendsleaveme]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		});  
	/*people thinking i'm crazy*/
		$(document).ready(function(){
			$("li[id=thinkimcrazy]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink24", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink24", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink24", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=thinkimcrazy]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*emotional/romantic relationships*/
		$(document).ready(function(){
			$("li[id=emotionalrel]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink25", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink25", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink25", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=emotionalrel]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*betrael in a relationship*/
		$(document).ready(function(){
			$("li[id=betrayel]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink26", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink26", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink26", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=betrayel]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*that people hate me*/
		$(document).ready(function(){
			$("li[id=hateme]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink27", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink27", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink27", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=hateme]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*that people will forget about me*/
		$(document).ready(function(){
			$("li[id=forgetme]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink28", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink28", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink28", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=forgetme]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*getting hit by a loved one*/
		$(document).ready(function(){
			$("li[id=hit]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink29", "addOrRemove");
				$("li[data-value=aa]").toggleClass("pink29", "addOrRemove");
				$("li[data-value=ab]").toggleClass("pink29", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=hit]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=aa]").toggleClass("grey", "addOrRemove");
				$("li[data-value=ab]").toggleClass("grey", "addOrRemove");
			});
		});  
	/*losing my personality*/
		$(document).ready(function(){
			$("li[id=losepersonality]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink30", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink30", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink30", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=losepersonality]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*losing my memory*/
		$(document).ready(function(){
			$("li[id=losememory]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink31", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink31", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink31", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=losememory]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*switching bodies with people*/
		$(document).ready(function(){
			$("li[id=switchbodies]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink32", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink32", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink32", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=switchbodies]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*losing my hair*/
		$(document).ready(function(){
			$("li[id=losehair]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink33", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink33", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink33", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=losehair]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*my body changing too much*/
		$(document).ready(function(){
			$("li[id=changingbody]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink34", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink34", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink34", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=changingbody]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*my hair color changing*/
		$(document).ready(function(){
			$("li[id=changinghaircolor]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink35", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink35", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink35", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=changinghaircolor]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*losing a limb*/
		$(document).ready(function(){
			$("li[id=loselimb]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink36", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink36", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink36", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink36", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink36", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=loselimb]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		});  
	/*going blind*/
		$(document).ready(function(){
			$("li[id=blind]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink37", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink37", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink37", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink37", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink37", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink37", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink37", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=blind]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*going deaf*/
		$(document).ready(function(){
			$("li[id=deaf]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink38", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink38", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink38", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink38", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink38", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink38", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink38", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=deaf]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*going color-blind*/
		$(document).ready(function(){
			$("li[id=color-blind]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink39", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink39", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink39", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink39", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink39", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink39", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink39", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=color-blind]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*becoming mute*/
		$(document).ready(function(){
			$("li[id=mute]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink40", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink40", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink40", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink40", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink40", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink40", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink40", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=mute]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*becoming anosmic*/
		$(document).ready(function(){
			$("li[id=anosmic]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink41", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink41", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink41", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink41", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink41", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink41", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink41", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=anosmic]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*permanent anesthesia*/
		$(document).ready(function(){
			$("li[id=permanesthesia]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink42", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink42", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink42", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink42", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink42", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink42", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink42", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=permanesthesia]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*paralyzation*/
		$(document).ready(function(){
			$("li[id=paralyzation]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=p]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=q]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=r]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink43", "addOrRemove");
				$("li[data-value=w]").toggleCLass("pink43", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink43", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=paralyzation]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=o]").toggleClass("grey", "addOrRemove");
				$("li[data-value=p]").toggleClass("grey", "addOrRemove");
				$("li[data-value=q]").toggleClass("grey", "addOrRemove");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleCLass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*tsunami*/
		$(document).ready(function(){
			$("li[id=tsumani]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink44", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink44", "addOrRemove");
				$("li[data-value=w]").toggleClass("pink44", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink44", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=tsumani]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleClass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*floods*/
		$(document).ready(function(){
			$("li[id=floods]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink45", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink45", "addOrRemove");
				$("li[data-value=w]").toggleClass("pink45", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink45", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=floods]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleClass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*bombs*/
		$(document).ready(function(){
			$("li[id=bombs]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink46", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink46", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=bombs]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*war*/
		$(document).ready(function(){
			$("li[id=war]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink47", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink47", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=war]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*buildings falling down*/
		$(document).ready(function(){
			$("li[id=buildingfall]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink48", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink48", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=buildingfall]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*infrustructure failing*/
		$(document).ready(function(){
			$("li[id=infrastructurefail]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink49", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink49", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=infrastructurefail]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*cars*/
		$(document).ready(function(){
			$("li[id=cars]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink50", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink50", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=cars]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*car addicents*/
		$(document).ready(function(){
			$("li[id=caraccidents]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink51", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink51", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=caraccidents]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*the number 3*/
		$(document).ready(function(){
			$("li[id=three]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=w]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink52", "addOrRemove");
				$("li[data-value=y]").toggleClass("pink52", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=three]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleClass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
				$("li[data-value=y]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*the color blue*/
		$(document).ready(function(){
			$("li[id=blue]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=s]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=t]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=u]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=v]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=w]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=x]").toggleClass("pink53", "addOrRemove");
				$("li[data-value=y]").toggleClass("pink53", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=blue]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=r]").toggleClass("grey", "addOrRemove");
				$("li[data-value=s]").toggleClass("grey", "addOrRemove");
				$("li[data-value=t]").toggleClass("grey", "addOrRemove");
				$("li[data-value=u]").toggleClass("grey", "addOrRemove");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=w]").toggleClass("grey", "addOrRemove");
				$("li[data-value=x]").toggleClass("grey", "addOrRemove");
				$("li[data-value=y]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*people with masks*/
		$(document).ready(function(){
			$("li[id=masks]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=z]").toggleClass("pink54", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=masks]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=z]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*movie theatres*/
		$(document).ready(function(){
			$("li[id=movietheatres]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink55", "addOrRemove");
				$("li[data-value=z]").toggleClass("pink55", "addOrRemove");
			});
		});
		$(document).ready(function(){
			$("li[id=movietheatres]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=z]").toggleClass("grey", "addOrRemove");
			});
		});  
	/*circuses*/
		$(document).ready(function(){
			$("li[id=circuses]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink56", "addOrRemove");
				$("li[data-value=z]").toggleClass("pink56", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=circuses]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=z]").toggleClass("grey", "addOrRemove");
			});
		}); 
	/*lack of sunlight*/
		$(document).ready(function(){
			$("li[id=lackofsunlight]").click(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("pink57", "addOrRemove");
				$("li[data-value=y]").toggleClass("pink57", "addOrRemove");
				$("li[data-value=z]").toggleClass("pink57", "addOrRemove");
			});
		}); 
		$(document).ready(function(){
			$("li[id=lackofsunlight]").hover(function(){
				$(this).toggleClass("show");
				$("li[data-value=v]").toggleClass("grey", "addOrRemove");
				$("li[data-value=y]").toggleClass("grey", "addOrRemove");
				$("li[data-value=z]").toggleClass("grey", "addOrRemove");
			});
		}); 
