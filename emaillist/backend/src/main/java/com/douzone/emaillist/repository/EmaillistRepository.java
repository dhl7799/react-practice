package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> getList() {
		return sqlSession.selectList("emaillist.getList");
	}

	public void insert(EmaillistVo emaillistVo) {
		sqlSession.insert("emaillist.insertEmail",emaillistVo);
	}

	public void delete(long no) {
		sqlSession.delete("emaillist.deleteEmail",no);
		
	}

	public List<EmaillistVo> search(String keyword) {
		return sqlSession.selectList("emaillist.search", keyword);
	}
}
