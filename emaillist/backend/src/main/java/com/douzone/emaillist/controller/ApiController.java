package com.douzone.emaillist.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.repository.EmaillistRepository;
import com.douzone.emaillist.vo.EmaillistVo;
import com.douzone.emaillist.dto.JsonResult;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;


	@GetMapping("/list")
	public ResponseEntity<JsonResult> Emaillist() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.getList()));
	}
	
	@PostMapping("/insert")
	public ResponseEntity<JsonResult> insertEmail(@RequestBody EmaillistVo emaillistVo) {
		emaillistRepository.insert(emaillistVo);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	
	@GetMapping("/delete")
	public ResponseEntity<JsonResult> deleteEmail(String no) {
		long long_no = Long.parseLong(no);
		emaillistRepository.delete(long_no);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
	
	@GetMapping("/search")
	public ResponseEntity<JsonResult> searchEmail(String keyword) {
		List<EmaillistVo> result = emaillistRepository.search(keyword);
		System.out.println(keyword);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(result));
	}
	

	
}
