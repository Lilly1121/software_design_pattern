// package com.max.quizspring.repo;

// import java.util.List;
// import java.util.Optional;
// import org.springframework.data.jpa.repository.JpaRepository;
// import com.max.quizspring.model.Token;

// public interface JwtRepo extends JpaRepository<Token, String> {
//     List<Token> findAllByUser_UidAndExpiredFalseAndRevokedFalse(Long uid);

//     Optional<Token> findByToken(String token);
// }

package com.max.quizspring.repo;

import com.max.quizspring.config.JwtToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JwtRepo extends JpaRepository<JwtToken, Long> {
}
