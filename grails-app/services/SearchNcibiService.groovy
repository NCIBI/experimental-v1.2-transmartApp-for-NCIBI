/*************************************************************************
 * tranSMART - translational medicine data mart
 * 
 * Copyright 2008-2012 Janssen Research & Development, LLC.
 * 
 * This product includes software developed at Janssen Research & Development, LLC.
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
 * as published by the Free Software  * Foundation, either version 3 of the License, or (at your option) any later version, along with the following terms:
 * 1.	You may convey a work based on this program in accordance with section 5, provided that you retain the above notices.
 * 2.	You may convey verbatim copies of this program code as you receive it, in any medium, provided that you retain the above notices.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS    * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 *
 ******************************************************************/

import groovy.time.*

import org.transmart.SearchFilter
import org.transmart.SearchNCIBIResult
import org.transmart.search.count.CountType;
import org.transmart.search.count.TotallyBogusCountCache

/**
  * $Id: SearchService.groovy 10098 2011-10-19 18:39:32Z mmcduffie $
  * @author $Author: mmcduffie $
  * @version $Revision: 10098 $
  *
  */
public class SearchNcibiService{
	
	def pubmedNCIBIService
	def metscapeService
	def conceptGenCountService
	def gene2MeshService
	def metab2MeshService

	def int cacheCount(SearchNCIBIResult sResult, SearchFilter searchFilter, CountType type, countsClosure) {
		def searchText = searchFilter.searchText
		def int n = 0;
		if (TotallyBogusCountCache.haveCount(type,searchText)) {
			n = TotallyBogusCountCache.findCount(type,searchText)
			log.info("For Type - " + type + ": count from chache = " + n)
		} else {
			n = countsClosure(searchFilter)
			if (n > -1 ){
				TotallyBogusCountCache.postCount(type,searchText,n)
				log.info("For Type - " + type + ": count from closure = " + n)
			}
		}
		return n
	}
	
	def doResultCount(SearchNCIBIResult sResult, SearchFilter searchFilter){
		
		// Closure to measure the time performance
		def benchmark = { closure ->
			def start = new Date()
			closure.call()
			return TimeCategory.minus(new Date(), start)
		}		
	
		def duration = 0

		duration = benchmark {
			sResult.pubmedCount = 
				cacheCount(sResult, searchFilter, CountType.PUBMED, {
					def value = pubmedNCIBIService.getCount(it)
					return value;
				})
		}
		log.info("Pubmed Count Duration: ${duration}")
		
		duration = benchmark {
			sResult.metscapeCount = 
				cacheCount(sResult, searchFilter, CountType.METSCAPE, {
					def counts = metscapeService.getCount(it)
					def value = counts.gene + counts.enzyme + counts.reaction + counts.compound
					return value;
				})
		}
		log.info("Metscape Count Duration: ${duration}")

		log.info("Just before: Calling conceptGenCountService")
		
		duration = benchmark {
			sResult.conceptGenCount = 
				cacheCount(sResult, searchFilter, CountType.CONCEPT, {
					log.info("Calling conceptGenCountService")
					def value = conceptGenCountService.getCount(it)
					return value;
				})
		}
		log.info("ConceptGen Count Duration: ${duration}")

		duration = benchmark {
			sResult.gene2MeshCount = 
				cacheCount(sResult, searchFilter, CountType.G2M, {
					def value = gene2MeshService.getCount(it)
					return value;
				})
		}
		log.info("Gene2Mesh Count Duration: ${duration}")

		duration = benchmark {
			sResult.metab2MeshCount = 
				cacheCount(sResult, searchFilter, CountType.M2M, {
					def value = metab2MeshService.getCount(it)
					return value;
				})
		}
		log.info("Metab2Mesh Count Duration: ${duration}")

	}

	def createPagingParamMap(params, defaultmax, defaultoffset){
		def paramMap =[:]
		def max = params.max
		def offset = params.offset
		if(max==null && defaultmax!=null)
			max=defaultmax
		if(offset==null&&defaultoffset!=null)
			offset=defaultoffset
			// dynamic typing sucks here..
		if(max!=null)
			paramMap["max"]=Integer.valueOf(String.valueOf(max))
		if(offset!=null)
			paramMap["offset"]=Integer.valueOf(String.valueOf(offset))
		return paramMap;
	}
}