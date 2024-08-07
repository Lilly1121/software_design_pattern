// package com.max.quizspring.repo;

// import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;
// import com.max.quizspring.model.Application;

// public interface Applicationrepo extends JpaRepository<Application, Long> {
//   List<Application> findByName(String name);

//   List<Application> findByEmail(String email);
// }

package com.max.quizspring.repo;

import com.max.quizspring.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Applicationrepo extends JpaRepository<Application, Long> {
  List<Application> findByName(String name);

  List<Application> findByEmail(String email);
}
